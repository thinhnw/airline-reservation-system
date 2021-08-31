<?php

namespace App\Http\Controllers;

use App\Exceptions\SeatUnavailableException;
use App\Mail\FlightReservation;
use App\Models\Flight;
use App\Models\Reservation;
use App\Models\StripeCustomer;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use PhpParser\Node\Stmt\TryCatch;
use Illuminate\Support\Str;

class ReservationController extends Controller
{

    const NUMERIC_BIZ = [ 'A' => 0, 'B' => 0, 'D' => 1, 'E' => 1, 'F' => 2, 'G' => 2, 'J' => 3, 'K' => 3 ];
    const NUMERIC_ECO = [ 'A' => 0, 'B' => 1, 'C' => 2, 'D' => 3, 'E' => 4, 'F' => 5, 'G' => 6, 'H' => 7, 'J' => 8, 'K' => 9 ];
    /**
     * Create a new AuthController instance
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('JWT', ['except' => ['checkin']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json([
            'reservations' => Reservation::all()
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        try {
            $reservation = new Reservation;
            $reservation->price = $request->price;
            $reservation->e_ticket = $request->e_ticket;
            $reservation->user_id = Auth::user()->id;
            $reservation->contact = json_encode($request->contact_details);

            $reservation->passengers = json_encode($request->passenger_details);
            $reservation->flight_departure_id = $request->flight_departure_id;
            $this->reserveSeatsDeparture($request->passenger_details, $request->flight_departure_id);
            if ($request->has("flight_return_id")) {
                $reservation->flight_return_id = $request->flight_return_id;
                $this->reserveSeatsReturn($request->passenger_details, $request->flight_return_id);
            }
            $reservation->seat_class = $request->seat_class;
            $reservation->skymiles = $request->skymiles;
            $reservation->save();
            $reservation->createTickets();
            // Mail::to($request->contact_details["email"])->send(new FlightReservation($reservation));
            return response()->json([
                'reservation' => $reservation
            ], 200);
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'message' => $th->getMessage(),
            ], 404);
        }
    }

    private function reserveSeatsDeparture($passengers, $flight_id) {
        $flight = Flight::find($flight_id);
        foreach($passengers as $passenger) {
            if ($passenger["seatDeparture"] == "") return;
            if (!$flight->checkAvailableSeat($passenger["seatDeparture"])) throw new SeatUnavailableException("UNAVAILABLE_SEAT");
        }
        foreach($passengers as $passenger) {
            $flight->reserveSeat($passenger["seatDeparture"]);
        }
    }

    private function reserveSeatsReturn($passengers, $flight_id) {
        $flight = Flight::find($flight_id);
        foreach($passengers as $passenger) {
            if ($passenger["seatReturn"] == "") return;
            if (!$flight->checkAvailableSeat($passenger["seatReturn"])) throw new SeatUnavailableException("UNAVAILABLE_SEAT");
        }
        foreach($passengers as $passenger) {
            $flight->reserveSeat($passenger["seatReturn"]);
        }
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        try {
            //code...
            $reservation = Reservation::findOrFail($id);
            if ($reservation->user->id == Auth::user()->id) {
                return response()->json([
                    'reservation' => $reservation
                ], 200);
            } else {
                throw new Exception('No permission');
            }
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'message' => $th->getMessage()
            ], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getByUserId(Request $request) {
        return response()->json([
            'reservations' => Reservation::where('user_id', $request->user_id)->get()
        ], 200); 
    }

    public function checkoutWithStripe(Request $request) {
        $customer = StripeCustomer::firstOrCreate(
            [
                'email' => $request->txt_billing_email
            ],
            [
                // 'password' => Hash::make(Str::random(12)),
                'name' => $request->txt_billing_fullname,
                'street_address' => $request->txt_inv_addr1,
                'city' => $request->txt_bill_city,
                'country' => $request->txt_bill_country,
                'state' => $request->txt_bill_state,
                'zip_code' => $request->zip_code,
            ]
        );
        try {
            $reservation = Reservation::find($request->reservation_id);
            $customer->createOrGetStripeCustomer();
            $payment = $customer->charge(
                intval($request->amount),
                $request->payment_method_id
            );
            $payment = $payment->asStripePaymentIntent();

            $user = User::find($reservation->user_id);
            $skymiles = $user->skymiles;
            $user->update([
                'skymiles' => $skymiles + $reservation->skymiles
            ]);

            $reservation->update([
                'payment' => json_encode($payment),
                'status' => 'CONFIRMED'
            ]);
            $reservation->exportReceipt();

            return $payment;
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function checkout(Request $request) {
        try {
            //code...
            $payment = $this->checkoutWithStripe($request);
            Mail::to($request->txt_billing_email)->send(new FlightReservation(Reservation::find($request->reservation_id)));
            return response()->json([
                'payment' => $payment
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage()
            ], 404);
        }
    }

    public function cancel(Request $request) {
        try {
            $reservation = Reservation::find($request->id);
            if ($reservation->status == 'PENDING') {
                $reservation->releaseSeatsAndDeleteTickets();
                $reservation->update([
                    'status' => 'CANCELED'
                ]);
            } else if ($reservation->status == 'CONFIRMED') {
                $payment = json_decode($reservation->payment, true);
                $customer = StripeCustomer::where('email', $payment["charges"]["data"][0]["billing_details"]["email"])->first();
                
                $refunded = $customer->refund($payment["id"]);

                $reservation->releaseSeatsAndDeleteTickets();
                $reservation->update([
                    'status' => 'CANCELED'
                ]);
                $reservation->user->update([
                    'skymiles' => $reservation->user->skymiles - $reservation->skymiles
                ]);
                return response()->json([
                    'refunded' => $refunded
                ], 200);
            } else if ($reservation->status == 'CANCELED') {
                throw new Exception('This reservation has been canceled already.');
            } else if ($reservation->status == 'CHECKED-IN') {
                throw new Exception('This reservation can no longer be canceled.');
            }
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage()
            ], 404);
        }
    }
}

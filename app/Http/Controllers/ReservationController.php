<?php

namespace App\Http\Controllers;

use App\Mail\FlightReservation;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;


class ReservationController extends Controller
{
    /**
     * Create a new AuthController instance
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('JWT');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $reservation = new Reservation;
        $reservation->price = $request->price;
        $reservation->e_ticket = $request->e_ticket;
        $reservation->user_id = Auth::user()->id;
        $reservation->details = json_encode($request->details);
        $reservation->save();
        Mail::to('nvt0412@gmail.com')->send(new FlightReservation());
        return response()->json([
            'reservation' => $reservation
        ], 200);
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
}

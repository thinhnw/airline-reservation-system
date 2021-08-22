<?php

namespace App\Http\Controllers;

use App\Exceptions\SeatUnavailableException;
use App\Mail\FlightReservation;
use App\Models\Flight;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use PhpParser\Node\Stmt\TryCatch;

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
            $reservation->save();

            Mail::to($request->contact_details["email"])->send(new FlightReservation($reservation));
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

    public function checkout(Request $request) {
        $vnp_Url = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
        $vnp_Returnurl = "localhost:8000/api/vnpay_return";

        $vnp_TmnCode = "UM76NZPS";//Mã website tại VNPAY 
        $vnp_HashSecret = "CBFPDDJREFLDRYAICERWBXULLODPARXD"; //Chuỗi bí mật
        
        // $vnp_TxnRef = $request->reservation_id; 
        $vnp_TxnRef = 1;
        //Mã đơn hàng. Trong thực tế Merchant cần insert đơn hàng vào DB và gửi mã này sang VNPAY
        $reservation = Reservation::find($request->reservation_id);
        $vnp_OrderInfo = "Flight Booking";
        $vnp_OrderType = 'billpayment';
        // $vnp_Amount = $reservation->price * 100;
        $vnp_Amount = 100000 * 100;
        $vnp_Locale = "en";
        $vnp_IpAddr = $request->ip();
        //Add Params of 2.0.1 Version
        $vnp_ExpireDate = $request->txt_expire;
        //Billing
        $vnp_Bill_Mobile = $request->txt_billing_mobile;
        $vnp_Bill_Email = $request->txt_billing_email;
        $fullName = trim($request->txt_billing_fullname);
        if (isset($fullName) && trim($fullName) != '') {
            $name = explode(' ', $fullName);
            $vnp_Bill_FirstName = array_shift($name);
            $vnp_Bill_LastName = array_pop($name);
        }
        $vnp_Bill_Address= $request->txt_inv_addr1;
        $vnp_Bill_City= $request->txt_bill_city;
        $vnp_Bill_Country= $request->txt_bill_country;
        $vnp_Bill_State= $request->txt_bill_state;
        // Invoice
        $vnp_Inv_Phone= $request->txt_inv_mobile;
        $vnp_Inv_Email= $request->txt_inv_email;
        $vnp_Inv_Customer= $request->txt_inv_customer;
        $vnp_Inv_Address= $request->txt_inv_addr1;
        $vnp_Inv_Company= $request->txt_inv_company;
        $vnp_Inv_Taxcode= $request->txt_inv_taxcode;
        $vnp_Inv_Type= $request->cbo_inv_type;
        $inputData = array(
            "vnp_Version" => "2.1.0",
            "vnp_TmnCode" => $vnp_TmnCode,
            "vnp_Amount" => $vnp_Amount,
            "vnp_Command" => "pay",
            "vnp_CreateDate" => date('YmdHis'),
            "vnp_CurrCode" => "VND",
            "vnp_IpAddr" => $vnp_IpAddr,
            "vnp_Locale" => $vnp_Locale,
            "vnp_OrderInfo" => $vnp_OrderInfo,
            "vnp_OrderType" => $vnp_OrderType,
            "vnp_ReturnUrl" => $vnp_Returnurl,
            "vnp_TxnRef" => $vnp_TxnRef,

            "vnp_ExpireDate"=>$vnp_ExpireDate,
            "vnp_Bill_Mobile"=>$vnp_Bill_Mobile,
            "vnp_Bill_Email"=>$vnp_Bill_Email,
            "vnp_Bill_FirstName"=>$vnp_Bill_FirstName,
            "vnp_Bill_LastName"=>$vnp_Bill_LastName,
            "vnp_Bill_Address"=>$vnp_Bill_Address,
            "vnp_Bill_City"=>$vnp_Bill_City,
            "vnp_Bill_Country"=>$vnp_Bill_Country,
            "vnp_Inv_Phone"=>$vnp_Inv_Phone,
            "vnp_Inv_Email"=>$vnp_Inv_Email,
            "vnp_Inv_Customer"=>$vnp_Inv_Customer,
            "vnp_Inv_Address"=>$vnp_Inv_Address,
            "vnp_Inv_Company"=>$vnp_Inv_Company,
            "vnp_Inv_Taxcode"=>$vnp_Inv_Taxcode,
            "vnp_Inv_Type"=>$vnp_Inv_Type
        );
        
        if (isset($vnp_BankCode) && $vnp_BankCode != "") {
            $inputData['vnp_BankCode'] = $vnp_BankCode;
        }
        if (isset($vnp_Bill_State) && $vnp_Bill_State != "") {
            $inputData['vnp_Bill_State'] = $vnp_Bill_State;
        }
        
        //var_dump($inputData);
        ksort($inputData);
        $query = "";
        $i = 0;
        $hashdata = "";
        foreach ($inputData as $key => $value) {
            if ($i == 1) {
                $hashdata .= '&' . urlencode($key) . "=" . urlencode($value);
            } else {
                $hashdata .= urlencode($key) . "=" . urlencode($value);
                $i = 1;
            }
            $query .= urlencode($key) . "=" . urlencode($value) . '&';
        }
        
        $vnp_Url = $vnp_Url . "?" . $query;
        if (isset($vnp_HashSecret)) {
            $vnpSecureHash =   hash_hmac('sha512', $hashdata, $vnp_HashSecret);//  
            $vnp_Url .= 'vnp_SecureHash=' . $vnpSecureHash;
        }
        return redirect($vnp_Url);
    }
    public function vnpayReturn(Request $request) {
        if ($request->get("vnp_ResponseCode") == "00") {
            die("Transaction succeed");
        } else die("Transaction failed");
    }
}

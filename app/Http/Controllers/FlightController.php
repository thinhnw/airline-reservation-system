<?php

namespace App\Http\Controllers;

use App\Models\Flight;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class FlightController extends Controller
{

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('JWT', ['except' => ['index']]);
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
            'flights' => Flight::all()
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
            $request->validate([
                'flight_number' => 'required',
                'departure_id' => 'required',
                'destination_id' => 'required',
                'departure_time' => 'required|date',
                'arrival_time' => 'required|date'
            ]);

            $flight = new Flight;
            $flight->flight_number = $request->flight_number;
            $flight->departure_id = $request->departure_id;
            $flight->destination_id = $request->destination_id;
            $flight->departure_time = Carbon::parse($request->departure_time)->format('Y-m-d H:i:s');
            $flight->arrival_time = Carbon::parse($request->arrival_time)->format('Y-m-d H:i:s');

            $flight->save();
            return response()->json([
                'flight' => $flight
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage()
            ], 404);
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
        try {
            $request->validate([
                'flight_number' => 'required',
                'departure_id' => 'required',
                'destination_id' => 'required',
                'departure_time' => 'required|date',
                'arrival_time' => 'required|date'
            ]);

            $flight = Flight::find($id);
            $flight->flight_number = $request->flight_number;
            $flight->departure_id = $request->departure_id;
            $flight->destination_id = $request->destination_id;
            $flight->departure_time = Carbon::parse($request->departure_time)->format('Y-m-d H:i:s');
            $flight->arrival_time = Carbon::parse($request->arrival_time)->format('Y-m-d H:i:s');

            $flight->update();
            return response()->json([
                'flight' => $flight
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage()
            ], 404);
        }
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
        $flight = Flight::find($id);
        $flight->delete();
        return response()->json([
            'message' => "You've successfully deleted a flight"
        ], 200);
    }
}

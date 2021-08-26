<?php

namespace App\Http\Controllers;

use App\Models\Flight;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Helpers\AirportPriorityQueue;
use App\Models\Airport;
use PhpParser\Node\Stmt\TryCatch;

class FlightController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('JWT', ['except' => ['index', 'show', 'search']]);
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
        try {
            //code...
            $flight = Flight::findOrFail($id);
            return response()->json([
                'flight' => $flight
            ], 200);
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
    /** 
     * @return departure_flight_paths: arrays of paths from city A to city B
     *   @return return_flight_paths: arrays of paths from city B to city Aa // if there is $return_date
     */
    public function search(Request $request) {
        if (!$request->has('filter')) abort(404);
        try {
            //code...
            $filter = json_decode($request->filter);
            if ($filter->trip_type == 'One-way') return response()->json([
                'flightsDeparture' => $this->searchForFlightsDeparture($filter)
            ], 200);
            return response()->json([
                'flightsDeparture' => $this->searchForFlightsDeparture($filter),
                'flightsReturn' => $this->searchForFlightsReturn($filter)
            ], 200);

        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'message' => $th->getMessage()
            ], 200);
        }        
    }

    private function searchForFlightsDeparture($filter) {
        $from_airport_id = $filter->from_airport_id;
        $to_airport_id = $filter->to_airport_id;
        $departure_date = $filter->departure_date;
        $flights = Flight::where([
            ['departure_id', '=', $from_airport_id],
            ['destination_id', '=', $to_airport_id],
            ['departure_time', '>=', $departure_date . ' 00:00:00'],
            ['departure_time', '<=', $departure_date . ' 23:59:59'],
        ]);

        $passengers = $filter->passengers;
        $passengerCount = $passengers->adults + $passengers->children;
        $class = $filter->class;
        if ($class == 'Business') return $flights->where([['business_seat_count', '>=', $passengerCount]])->get();
        return $flights->where([['economy_seat_count', '>=', $passengerCount]])->get();
    }

    private function searchForFlightsReturn($filter) {
        $from_airport_id = $filter->to_airport_id;
        $to_airport_id = $filter->from_airport_id;
        $departure_date = $filter->return_date;

        $flights = Flight::where([
            ['departure_id', '=', $from_airport_id],
            ['destination_id', '=', $to_airport_id],
            ['departure_time', '>=', $departure_date . ' 00:00:00'],
            ['departure_time', '<=', $departure_date . ' 23:59:59'],
        ]);

        $passengers = $filter->passengers;
        $passengerCount = $passengers->adults + $passengers->children;
        $class = $filter->class;

        if ($class == 'Business') return $flights->where([['business_seat_count', '>=', $passengerCount]])->get();
        return $flights->where([['economy_seat_count', '>=', $passengerCount]])->get();
    }

}

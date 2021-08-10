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
        $this->middleware('JWT', ['except' => ['index', 'search']]);
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
        ])->get();
        return $flights;

            $from_airport_id = $filter->from_airport_id;
            $to_airport_id = $filter->to_airport_id;
            $trip_type = $filter->trip_type;
            $departure_date = $filter->departure_date;
            $return_date = $filter->return_date;

            $nodeStart = (object) [
                'airport_id' => $from_airport_id,
                'departure_time' => Carbon::parse($departure_date . ' 00:00:00'),
                'arrival_time' => Carbon::parse($departure_date . ' 00:00:00'),
                'shortest_distance' => 0
            ];
            $nodeEnd = (object) [
                'airport_id' => $to_airport_id,
                'arrival_time' => Carbon::parse($return_date . ' 23:59:59')
            ];

            $pq = new AirportPriorityQueue;
            $shortestDistance = [];
            $flights = Flight::all();
            $airports = Airport::all();
            foreach ($airports as $airport) {
                $shortestDistance[$airport->id] = 1e9;
            }

            $shortestDistance[$nodeStart->airport_id] = 0;
            $pq->insert($nodeStart, 0);

            while ($pq->count()) {
                $nodeU = $pq->top();
                $airportU = Airport::find($nodeU->airport_id);
                $pq->extract();
                if ($shortestDistance[$nodeU->airport_id] != $nodeU->shortest_distance) continue;
                foreach ($flights as $flight) {
                    if ($flight->departure_id != $nodeU->airport_id) continue;
                    if ($nodeU->airport_id == $nodeStart->airport_id && $nodeU->arrival_time->gt($flight->departure_time)) continue;
                    if ($nodeU->airport_id != $nodeStart->airport_id && $nodeU->arrival_time->addHour()->gt($flight->departure_time)) continue;
                    if (Carbon::parse($flight->arrival_time)->gt($nodeEnd->arrival_time)) continue;

                    // airportU.arrival_time (+1 hour if airport is not nodeStart) <= flight.departure_time < flight.arrival_time <= nodeEnd.arrival_time
                    $airportV = Airport::find($flight->destination_id);
                    $uvDistance = $airportU->getDistanceTo($airportV);
                    if ($shortestDistance[$airportV->id] > $nodeU->shortest_distance + $uvDistance) {
                        $shortestDistance[$airportV->id] = $nodeU->shortest_distance + $uvDistance;
                        $nodeV = (object) [
                            'airport_id' => $airportV->id,
                            'arrival_time' => Carbon::parse($flight->arrival_time),
                            'shortest_distance' => $shortestDistance[$airportV->id]
                        ];
                        $pq->insert($nodeV, $shortestDistance[$airportV->id]);
                    }
                }
            }
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
        ])->get();
        return $flights;
    }
}

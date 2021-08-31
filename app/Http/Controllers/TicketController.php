<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;

use function PHPUnit\Framework\throwException;

class TicketController extends Controller
{

    public function checkin(Request $request) {
        try {
            //code...
            $ticket = Ticket::find($request->ticketNumber);
            $fullName = explode(" ", $ticket->passenger_name);
            if (end($fullName) != $request->lastName) throw new Exception('Credentials are invalid.');
            if ($ticket->status == 'CHECKED-IN') throw new Exception('Your ticket has already been checked-in.');
            $departureTime = Carbon::parse($ticket->flight->departure_time);
            $diffInSeconds = $departureTime->diffInSeconds(Carbon::now());
            // if ($diffInSeconds > 24 * 60 * 60) {
            //     throw new Exception('Online check-in is only available 24 hours prior to departure of the flight.');
            // }
            $ticket->checkIn();
            $ticket->reservation->update([
                'status' => 'CHECKED-IN'
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage()
            ], 404);
        }
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
}

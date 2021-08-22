<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Support\Facades\Log;

class SeatUnavailableException extends Exception
{
    //
     /**
     * Report or log an exception.
     *
     * @return void
     */
    public function report()
    {
        Log::debug('Seat is not available');
    }

    public function render($request, $exception)
    {
        return response()->json([
            'message' => $exception->getMessage(),
        ], 404);
    }
}

<?php

namespace App\Mail;

use App\Models\Reservation;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class FlightReservation extends Mailable
{
    use Queueable, SerializesModels;

    public $reservation;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Reservation $reservation)
    {
        //
        $this->reservation = $reservation;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $data = $this->reservation->e_ticket;
        $img = preg_replace('/^data:image\/\w+;base64,/', '', $data);
        $type = explode(';', $data)[0];
        $type = explode('/', $type)[1];
        $img = str_replace(' ', '+', $img);
        $data = base64_decode($img);

        return $this->from('sender@example.org', 'Booking Reservation')
                    ->view('emails.booking-reservation')
                    // ->with([
                    //     'name' => 'e-ticket.png',
                    //     'type' => $type,
                    //     'base64Data' => $data
                    // ]);
                    ->attachData($data, "e-ticket.png", [
                        "mime" => "image/png"
                    ]);
    }
}

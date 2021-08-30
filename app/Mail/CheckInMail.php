<?php

namespace App\Mail;

use App\Models\Ticket;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CheckInMail extends Mailable
{
    use Queueable, SerializesModels;

    public $reservation;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Ticket $ticket)
    {
        //
        $this->ticket = $ticket;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('sender@example.org', 'Boarding Pass')
                    ->view('emails.checkin')
                    ->with([
                        'ticket' => $this->ticket,
                    ])
                    ->attach(storage_path().'/app/public/boarding-pass-'. $this->ticket->id .'.docx', [
                        'as' => 'boarding-pass.docx'
                    ]);
    }
}

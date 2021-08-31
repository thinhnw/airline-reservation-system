<?php

namespace App\Models;

use App\Mail\CheckInMail;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Mail;
use PhpOffice\PhpWord\TemplateProcessor;

class Ticket extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function flight() {
        return $this->hasOne(Flight::class, 'id', 'flight_id');
    }
    public function reservation() {
        return $this->hasOne(Reservation::class, 'id', 'reservation_id');
    }

    public function checkIn() {
        
        try {
            if (!$this->seat) {
                $this->update([
                    'seat' => $this->flight->findFirstAvailableSeat($this->reservation->seat_class),
                ]);
                $this->flight->reserveSeat($this->seat);
            }
            $this->update([
                'status' => 'CHECKED-IN'
            ]);
            $this->exportBoardingPass();
            $contact = json_decode($this->reservation->contact, true);
            $receipt_email = $contact["email"];
            Mail::to($receipt_email)->send(new CheckInMail($this));
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'message' => $th->getMessage()
            ], 404);
        }
    }

    public function exportBoardingPass() {
        $templateProcessor = new TemplateProcessor(public_path() . '/boarding-pass.docx');
        $templateProcessor->setValue('passenger_name', $this->passenger_name);
        $templateProcessor->setValue('flight_number', $this->flight->flight_number);

        list($seatClass, $row, $col) = explode(" ", $this->seat);

        $templateProcessor->setValue('seat_class', $seatClass);
        $templateProcessor->setValue('seat', $row . $col);
        $templateProcessor->setValue('boarding_time', Carbon::parse($this->flight->departure_time)->subHour()->format('H:i'));
        $templateProcessor->setValue('airport_from', $this->flight->airportFrom->cityname . '(' . $this->flight->airportFrom->code . ')');
        $templateProcessor->setValue('airport_to', $this->flight->airportTo->cityname . '(' . $this->flight->airportTo->code . ')');
        $templateProcessor->setValue('departure_date', Carbon::parse($this->flight->departure_time)->format("dM"));
        $templateProcessor->setValue('departure_time', Carbon::parse($this->flight->departure_time)->format('H:i'));
        $templateProcessor->setValue('ticket_number', $this->id);
        $templateProcessor->saveAs(storage_path().'/app/public/boarding-pass-'.$this->id.'.docx');
    }
}

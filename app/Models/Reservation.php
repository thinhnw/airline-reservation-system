<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Flight;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Database\Eloquent\Prunable;
use Illuminate\Support\Facades\Hash;

class Reservation extends Model
{
    use HasFactory, Prunable;
    protected $guarded = [];

    protected $appends = [ 'pnr' ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function getPnrAttribute() {
        $hash = strval($this->id * 32452843);
        $hash = substr(base_convert($hash, 10, 26), -6);
        $array_c = str_split($hash);
        $hash = "";
        foreach($array_c as $char) {
            if (is_numeric($char)) {
                $hash .= chr(ord($char) - 48 + 65);
            } else {
                $hash .= chr(ord($char) - 97 + 65);
            }
        }
        return $hash;
    }

    public function prunable()
    {
        return static::where([
            ['created_at', '<=', now()->subMinute(10)],
            ['status', '=', 'PENDING']
        ]);
    }

    protected function pruning() {
        if ($this->flight_departure_id) {
            $this->releaseSeatsDeparture();
        }
        if ($this->flight_return_id) {
            $this->releaseSeatsReturn();
        }

        Ticket::where('reservation_id', $this->id)->delete();
    }


    private function releaseSeatsDeparture() {
        $passengers = json_decode($this->passengers, true);
        $flight = Flight::find($this->flight_departure_id);
        foreach($passengers as $passenger) {
            if ($passenger["seatDeparture"] == "") return;
            $flight->releaseSeat($passenger["seatDeparture"]);
        }
    }

    private function releaseSeatsReturn() {
        $passengers = json_decode($this->passengers, true);
        $flight = Flight::find($this->flight_return_id);
        foreach($passengers as $passenger) {
            if ($passenger["seatReturn"] == "") return;
            $flight->releaseSeat($passenger["seatReturn"]);
        }
    }

    public function createTickets() {
        $passengers = json_decode($this->passengers, true);
        foreach($passengers as $passenger) {
            $name = $passenger["title"] . ' ' . strtoupper($passenger["firstName"]) . ' ' . strtoupper($passenger["lastName"]);

            $ticketDeparture = new Ticket();
            $ticketDeparture->flight_id = $this->flight_departure_id;
            $ticketDeparture->reservation_id = $this->id;
            $ticketDeparture->passenger_name = $name;
            if ($passenger["seatDeparture"]) {
                $ticketDeparture->seat = $passenger["seatDeparture"];
            }
            $ticketDeparture->save();
            if ($this->flight_return_id)  {
                $ticketReturn = new Ticket();
                $ticketReturn->flight_id = $this->flight_return_id;
                $ticketReturn->reservation_id = $this->id;
                $ticketReturn->passenger_name = $name;
                if ($passenger["seatReturn"]) {
                    $ticketReturn->seat = $passenger["seatReturn"];
                }
                $ticketReturn->save();
            }
        }
    }

    public function exportReceipt() {
        $phpWord = new \PhpOffice\PhpWord\PhpWord();

        /* Note: any element you append to a document must reside inside of a Section. */

        // Adding an empty Section to the document...
        $section = $phpWord->addSection();
        $header = array('size' => 16, 'bold' => true);

        $section->addText('AVIA AIRWAYS', [ 'size' => '20', 'bold' => true], [ 'alignment' => 'center' ]);
        $section->addText('eTicket Receipt', [ 'size' => '14']);
        $section->addText('Prepared  for', [ 'size' => '12', 'bold' => true ]);
        $passengers = json_decode($this->passengers, true);
        foreach($passengers as $passenger) {
            $name = $passenger["title"] . ' ' . $passenger["firstName"] . ' ' . $passenger["lastName"];
            $section->addText($name, ['size' => '14' ]);
        }
        $section->addText('');
        $section->addText('RESERVATION CODE:  ' . $this->getPnrAttribute(), [ 'size' => '12']);
        $issueDate = Carbon::parse(json_decode($this->payment, true)["created"]);
        $section->addText('ISSUE DATE:  ' . $issueDate, [ 'size' => '12']);

        $lineStyle = array('weight' => 1, 'width' => 450, 'height' => 0, 'color' => 000000);
        $section->addLine($lineStyle);
        $section->addText('Inbound Flight');
        
        $fancyTableStyleName = 'Fancy Table';
        $fancyTableStyle = array('borderSize' => 1, 'borderColor' => 'cccccc', 'cellMargin' => 80, 'alignment' => \PhpOffice\PhpWord\SimpleType\JcTable::CENTER, 'cellSpacing' => 10);
        $fancyTableCellStyle = array('valign' => 'center');
        $fancyTableCellBtlrStyle = array('valign' => 'center', 'textDirection' => \PhpOffice\PhpWord\Style\Cell::TEXT_DIR_BTLR);
        $fancyTableFontStyle = array('bold' => true);
        $phpWord->addTableStyle($fancyTableStyleName, $fancyTableStyle);
        $table = $section->addTable($fancyTableStyleName);

        $table->addRow();
        $table->addCell(1750)->addText('DATE', [ 'size' => '12' ]);
        $table->addCell(1750)->addText('AIRLINE', [ 'size' => '12' ]);
        $table->addCell(1750)->addText('DEPARTURE', [ 'size' => '12' ]);
        $table->addCell(1750)->addText('ARRIVAL', [ 'size' => '12' ]);
        $table->addCell(2000)->addText('OTHER NOTES', [ 'size' => '12' ]);
        $table->addRow();

        $flight_departure = Flight::find($this->flight_departure_id);
        $table->addCell(1750)->addText(Carbon::parse($flight_departure->departure_time)->format('dM'));
        $table->addCell(1750)->addText("AVIA AIRWAYS \n".$flight_departure->flight_number);
        $table->addCell(1750)->addText($flight_departure->airportFrom->cityname . "\n" . Carbon::parse($flight_departure->departure_time)->format('h:i'));
        $table->addCell(1750)->addText($flight_departure->airportTo->cityname . "\n" . Carbon::parse($flight_departure->arrival_time)->format('h:i'));
        $table->addCell(2000)->addText('CLASS ' . $this->seat_class . "\n" . "BAGGAGE 2PC");

        $section->addText('Passenger Details:');
        $tablePassengers = $section->addTable($fancyTableStyleName);
        $tablePassengers->addRow();
        $tablePassengers->addCell(3750)->addText('Passengers');
        $tablePassengers->addCell(2500)->addText('Seat');
        $tablePassengers->addCell(2500)->addText('Ticket Number');
        foreach($passengers as $passenger) {
            $tablePassengers->addRow();
            $name = $passenger["title"] . ' ' . strtoupper($passenger["firstName"]) . ' ' . strtoupper($passenger["lastName"]);
            $tablePassengers->addCell(3750)->addText($name);
            $seat = "Check-in required";
            if ($passenger["seatDeparture"] != "") {
                $seat = $passenger["seatDeparture"];
            }
            $tablePassengers->addCell(2500)->addText($seat);
            $ticket = Ticket::where([
                ['reservation_id', '=', $this->id],
                ['flight_id', '=', $this->flight_departure_id],
                ['passenger_name', '=', $name]
            ])->first();
            $tablePassengers->addCell(2500)->addText($ticket->id);
        }


        if ($this->flight_return_id) {
            $section->addText('');
            $section->addLine($lineStyle);

            $section->addText('Inbound Flight');
            
            $phpWord->addTableStyle($fancyTableStyleName, $fancyTableStyle);
            $table = $section->addTable($fancyTableStyleName);

            $table->addRow();
            $table->addCell(1750)->addText('DATE', [ 'size' => '12' ]);
            $table->addCell(1750)->addText('AIRLINE', [ 'size' => '12' ]);
            $table->addCell(1750)->addText('DEPARTURE', [ 'size' => '12' ]);
            $table->addCell(1750)->addText('ARRIVAL', [ 'size' => '12' ]);
            $table->addCell(2000)->addText('OTHER NOTES', [ 'size' => '12' ]);
            $table->addRow();

            $flight_return = Flight::find($this->flight_return_id);
            $table->addCell(1750)->addText(Carbon::parse($flight_return->departure_time)->format('dM'));
            $table->addCell(1750)->addText("AVIA AIRWAYS \n".$flight_return->flight_number);
            $table->addCell(1750)->addText($flight_return->airportFrom->cityname . "\n" . Carbon::parse($flight_return->departure_time)->format('h:i'));
            $table->addCell(1750)->addText($flight_return->airportTo->cityname . "\n" . Carbon::parse($flight_return->arrival_time)->format('h:i'));
            $table->addCell(2000)->addText('CLASS ' . $this->seat_class . "\n" . "BAGGAGE 2PC");
            $section->addText('Passenger Details:');
            $tablePassengers = $section->addTable($fancyTableStyleName);
            $tablePassengers->addRow();
            $tablePassengers->addCell(3750)->addText('Passengers');
            $tablePassengers->addCell(2500)->addText('Seat');
            $tablePassengers->addCell(2500)->addText('Ticket Number');
            foreach($passengers as $passenger) {
                $tablePassengers->addRow();
                $name = $passenger["title"] . ' ' . strtoupper($passenger["firstName"]) . ' ' . strtoupper($passenger["lastName"]);
                $tablePassengers->addCell(3750)->addText($name);
                $seat = "Check-in required";
                if ($passenger["seatReturn"] != "") {
                    $seat = $passenger["seatReturn"];
                }
                $tablePassengers->addCell(2500)->addText($seat);
                $ticket = Ticket::where([
                    ['reservation_id', '=', $this->id],
                    ['flight_id', '=', $this->flight_return_id],
                    ['passenger_name', '=', $name]
                ])->first();
                $tablePassengers->addCell(2500)->addText($ticket->id);
            }
        }


        $section->addText('PAYMENT DETAILS');
        $section->addText('GRAND TOTAL:  VND ' . $this->price);
        $payment = json_decode($this->payment, true);
        $section->addText('PAYMENT:  ' . $payment["charges"]["data"][0]["payment_method_details"]["card"]["brand"] . " ************" . $payment["charges"]["data"][0]["payment_method_details"]["card"]["last4"]);
        
        // Saving the document as OOXML file...
        $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
        $objWriter->save(storage_path().'/app/public/receipt_' . $this->getPnrAttribute() . '.docx');
    }
}


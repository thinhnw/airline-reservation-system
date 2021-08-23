<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Prunable;

class Flight extends Model
{
    const NUMERIC_BIZ = [ 'A' => 0, 'B' => 0, 'D' => 1, 'E' => 1, 'F' => 2, 'G' => 2, 'J' => 3, 'K' => 3 ];
    const NUMERIC_ECO = [ 'A' => 0, 'B' => 1, 'C' => 2, 'D' => 3, 'E' => 4, 'F' => 5, 'G' => 6, 'H' => 7, 'J' => 8, 'K' => 9 ];

    use HasFactory;
    protected $fillable = [
        'flight_number',
        'departure_id',
        'destination_id',
        'departure_time',
        'arrival_time'
    ];

    protected $appends = [ 'fare_economy', 'fare_business' ];
    
    public function airportFrom() {
        return $this->hasOne(Airport::class, 'id', 'departure_id');
    }

    public function airportTo() {
        return $this->hasOne(Airport::class, 'id', 'destination_id');
    }

    public function getFareEconomyAttribute() {
        return ($this->airportFrom->getDistanceTo($this->airportTo) / 20) * 2300;
    }
    public function getFareBusinessAttribute() {
        return ($this->airportFrom->getDistanceTo($this->airportTo) / 10) * 2300;
    }

    public function checkAvailableSeat($seat) {
        list($seatClass, $row, $col) = explode(" ", $seat);
        if ($seatClass == "") return false;
        if ($seatClass == "Business") {
            $seatMap = json_decode($this->business_seats);
            return !$seatMap[$row - 1][self::NUMERIC_BIZ[$col]];
        }
        $seatMap = json_decode($this->economy_seats);
        return !$seatMap[$row - 1][self::NUMERIC_ECO[$col]];
    }

    public function reserveSeat($seat) {
        list($seatClass, $row, $col) = explode(" ", $seat);
        if ($seatClass == "Business") {
            $seatMap = json_decode($this->business_seats);
            $seatMap[$row - 1][self::NUMERIC_BIZ[$col]] = true;
            $this->business_seat_count--;
            $this->business_seats = json_encode($seatMap); 
            $this->update();
            return;
        } else if ($seatClass == "Economy") {
            $seatMap = json_decode($this->economy_seats);
            $seatMap[$row - 1][self::NUMERIC_ECO[$col]] = true;
            $this->economy_seat_count--;
            $this->economy_seats = json_encode($seatMap); 
            $this->update();
        }
    }

    public function releaseSeat($seat) {
        list($seatClass, $row, $col) = explode(" ", $seat);
        if ($seatClass == "Business") {
            $seatMap = json_decode($this->business_seats);
            if ($seatMap[$row - 1][self::NUMERIC_BIZ[$col]] == true) {
                $seatMap[$row - 1][self::NUMERIC_BIZ[$col]] = false;
                $this->business_seat_count++;
                $this->business_seats = json_encode($seatMap); 
                $this->update();
            }
        } else if ($seatClass == "Economy") {
            $seatMap = json_decode($this->economy_seats);
            if ($seatMap[$row - 1][self::NUMERIC_ECO[$col]] == true) {
                $seatMap[$row - 1][self::NUMERIC_ECO[$col]] = false;
                $this->economy_seat_count++;
                $this->economy_seats = json_encode($seatMap); 
                $this->update();
            }
        }
    }
}

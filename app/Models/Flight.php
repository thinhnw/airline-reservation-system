<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Prunable;

class Flight extends Model
{
    use HasFactory;
    protected $fillable = [
        'flight_number',
        'departure_id',
        'destination_id',
        'departure_time',
        'arrival_time'
    ];
    

    public function fareEconomy() {
        return 500;
    }
    public function fareBusiness() {
        return 1000;
    }
}

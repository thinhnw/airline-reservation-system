<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AirportController extends Model
{
    use HasFactory;
    protected $table="airports";
    protected $fillable=[
        'id_airport',
        'code',
        'name',
        'cityCode',
        'cityName',
        'countryName',
        'countryCode',
        'timezone',
        'lat',
        'lon',
        'numAirports',
        'city'
    ];
}

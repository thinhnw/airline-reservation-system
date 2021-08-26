<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Flight;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class Reservation extends Model
{
    use HasFactory;
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
}

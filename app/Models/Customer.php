<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $table='users';
    protected $fillable=[
        'name',
        'first_name',
        'last_name',
        'gender',
        'email',
        'user_type',
        'password'
    ];
}

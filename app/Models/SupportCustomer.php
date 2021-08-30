<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SupportCustomer extends Model
{
    use HasFactory;
    protected $table='support_customers';
    protected $fillable=[
        'name',
        'email',
        'class',
        'content'
    ];
}

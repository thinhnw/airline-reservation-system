<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Cashier\Billable;

class StripeCustomer extends Model
{
    use HasFactory, Billable;
    protected $guarded = [];
}

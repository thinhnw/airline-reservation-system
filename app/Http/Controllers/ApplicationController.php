<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class ApplicationController extends Controller
{
    public function __invoke()
    {
        return view('home');
    }
}

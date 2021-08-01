<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FlightController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', [ AuthController::class, 'login' ] );
    Route::post('logout', [ AuthController::class, 'logout'] );
    Route::post('refresh-token', [ AuthController::class, 'refresh']);
    Route::post('me', [ AuthController::class, 'me' ] );
    Route::post('register', [ AuthController::class, 'register' ] );
    
});

Route::resource('flights', FlightController::class);
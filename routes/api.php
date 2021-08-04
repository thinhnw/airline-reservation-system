<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FlightController;
use App\Http\Controllers\AirportController;
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

Route::resource('flights', FlightController::class)->middleware('api');
Route::resource('airports', AirportController::class)->middleware('api');

Route::get("/api-airport",[AirportController::class,"index"]);
Route::get("/airport",[AirportController::class,'all']);
Route::get('/airport/edit/{id}',[AirportController::class,'edit']);
Route::post('/airport/update/{id}',[AirportController::class,'update']);
Route::delete('/airport/delete/{id}',[AirportController::class,'delete']);
Route::post('/airport/save',[AirportController::class,'save']);


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

Route::get("/api-airport",[AirportControllerController::class,"index"]);
Route::get("/airport",[AirportControllerController::class,'all']);
Route::get('/airport/edit/{id}',[AirportControllerController::class,'edit']);
Route::post('/airport/update/{id}',[AirportControllerController::class,'update']);
Route::get('/airport/cancel',function (){
    return redirect()->to('http://127.0.0.1:8000/admin/airport');
});
Route::delete('/airport/delete/{id}',[AirportControllerController::class,'delete']);
Route::post('/airport/save',[AirportControllerController::class,'save']);


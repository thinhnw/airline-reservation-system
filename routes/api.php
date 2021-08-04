<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AirportControllerController;
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
Route::get("/api-airport",[AirportControllerController::class,"index"]);
Route::get("/airport",[AirportControllerController::class,'all']);
Route::get('/airport/edit/{id}',[AirportControllerController::class,'edit']);
Route::post('/airport/update/{id}',[AirportControllerController::class,'update']);
Route::delete('/airport/delete/{id}',[AirportControllerController::class,'delete']);
Route::post('/airport/save',[AirportControllerController::class,'save']);


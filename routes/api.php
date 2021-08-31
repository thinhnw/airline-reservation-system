<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FlightController;
use App\Http\Controllers\AirportController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\SupportCustomerController;
use App\Http\Controllers\TicketController;

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
Route::get('reservations/get_by_user_id', [ ReservationController::class, 'getByUserId' ])->middleware('api');
Route::post('reservations/checkout', [ ReservationController::class, 'checkout' ])->middleware('api');
Route::post('reservations/cancel', [ ReservationController::class, 'cancel' ])->middleware('api');
Route::get('reservations/vnpay_return', [ ReservationController::class, 'vnpayReturn' ])->middleware('api');
Route::get('reservations/checkin', [ ReservationController::class, 'checkin' ])->middleware('api');
Route::resource('reservations', ReservationController::class)->middleware('api');
Route::get('flights/search', [ FlightController::class, 'search' ])->middleware('api');
Route::get('flights/details', [ FlightController::class, 'details' ])->middleware('api');
Route::resource('flights', FlightController::class)->middleware('api');

Route::post('/tickets/checkin', [ TicketController::class, 'checkin' ])->middleware('api');
Route::resource('tickets', TicketController::class)->middleware('api');

//airport
Route::resource('airports', AirportController::class)->middleware('api');
Route::get("/api-airport",[AirportController::class,"index"]);
Route::get("/api-airport-paginate",[AirportController::class,"airportPaginate"]);
Route::get('/airport/edit/{id}',[AirportController::class,'edit']);
Route::post('/airport/update/{id}',[AirportController::class,'update']);
Route::delete('/airport/delete/{id}',[AirportController::class,'delete']);
Route::post('/airport/save',[AirportController::class,'save']);
//customer

Route::resource('customer', CustomerController::class)->middleware('api');
Route::get("/api-customer",[CustomerController::class,"index"]);
Route::get("/customer/findUser/{id}",[CustomerController::class,"findUser"]);
Route::get("/customer",[CustomerController::class,'all']);
Route::get('/customer/edit/{id}',[CustomerController::class,'edit']);
Route::post('/customer/update/{id}',[CustomerController::class,'update']);
Route::delete('/customer/delete/{id}',[CustomerController::class,'delete']);
Route::post('/customer/save',[CustomerController::class,'save']);
Route::post("/customer/checkPass/{id}",[CustomerController::class,"checkPass"]);

//customer feedback
Route::get("/customer-feedback",[SupportCustomerController::class,"index"]);
Route::post('/customer-feedback/save',[SupportCustomerController::class,'save']);


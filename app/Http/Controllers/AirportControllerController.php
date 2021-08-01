<?php

namespace App\Http\Controllers;

use App\Models\AirportController;
use Illuminate\Http\Request;

class AirportControllerController extends Controller
{
    //
    public function all(){
        $data=AirportController::paginate(10);
        $airport=null;
        return view("airports",["data"=>$data,'airport'=>$airport]);
    }

//    GET_DATA
    public function index(){
        $data=AirportController::all();
        return response()->json([
            'status'=>true,
            'message'=>'Success',
            'airports'=>$data
        ]);
    }

//    EDIT
    public function edit($id){
        $airport=AirportController::findOrFail($id);
        return response()->json([
            'airport'=>$airport
        ]);

    }

//    UPDATE
    public function update($id,Request $request){
        $airport=AirportController::findOrFail($id);
        $airport->update([
            'code'=>$request->post('code'),
            'name'=>$request->post('name'),
            'cityCode'=>$request->post('cityCode'),
            'cityName'=>$request->post('cityName'),
            'countryName'=>$request->post('countryName'),
            'countryCode'=>$request->post('countryCode'),
            'timezone'=>$request->post('timezone'),
            'lat'=>$request->post('lat'),
            'lon'=>$request->post('lon'),
            'numAirports'=>$request->post('numAirports'),
        ]);
        return redirect()->to('airport');

    }

//    DELETE
    public function delete($id){
        $airport=AirportController::findOrFail($id);
        $airport->delete();
        return response()->json('successfully deleted');
    }

//    SAVE
    public function save(Request $request){
        try {
            AirportController::create([
                'code' => $request->post('code'),
                'name' => $request->post('name'),
                'cityCode' => $request->post('cityCode'),
                'cityName' => $request->post('cityName'),
                'countryName' => $request->post('countryName'),
                'countryCode' => $request->post('countryCode'),
                'timezone' => $request->post('timezone'),
                'lat' => $request->post('lat'),
                'lon' => $request->post('lon'),
                'numAirports' => $request->post('numAirports'),

            ]);
        }
        catch (\Exception $e){
            abort(404);
        }
        return redirect()->to('airport');
    }
}

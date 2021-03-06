<?php

namespace App\Http\Controllers;

use App\Models\Airport;
use Illuminate\Http\Request;

class AirportController extends Controller
{

//    GET_DATA
    public function index(){
        $data=Airport::all();
        return response()->json([
            'status'=>true,
            'message'=>'Success',
            'airports'=>$data
        ]);
    }

    public function airportPaginate(){
        $data=Airport::paginate(10);
        return response()->json([
            'status'=>true,
            'message'=>'Success',
            'airports'=>$data
        ]);
    }

//    EDIT
    public function edit($id){
        $airport=Airport::findOrFail($id);
        return response()->json([
            'airport'=>$airport
        ]);

    }

//    UPDATE
    public function update($id,Request $request){
        $airport=Airport::findOrFail($id);
        $airport->update([
            'code'=>$request->post('code'),
            'name'=>$request->post('name'),
            'citycode'=>$request->post('citycode'),
            'cityname'=>$request->post('cityname'),
            'countryname'=>$request->post('countryname'),
            'countrycode'=>$request->post('countrycode'),
            'timezone'=>$request->post('timezone'),
            'lat'=>$request->post('lat'),
            'lon'=>$request->post('lon'),
            'numairports'=>$request->post('numairports'),
        ]);
        return response()->json('successfully updated');

    }

//    DELETE
    public function delete($id){
        $airport=Airport::findOrFail($id);
        $airport->delete();
        return response()->json('successfully deleted');
    }

//    SAVE
    public function save(Request $request){
        try {
            Airport::create([
                'code' => $request->code,
                'name' => $request->name,
                'citycode' => $request->citycode,
                'cityname' => $request->cityname,
                'countryname' => $request->countryname,
                'countrycode' => $request->countrycode,
                'timezone' => $request->timezone,
                'lat' => $request->lat,
                'lon' => $request->lon,
                'numairports' => (int)$request->numairports
            ]);
        }
        catch (\Exception $e){
            abort(404);
        }
        return response()->json('successfully added');
    }
}

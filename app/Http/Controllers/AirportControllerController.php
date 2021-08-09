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
        $data=AirportController::paginate(10);
        return response()->json([

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
        $airport=AirportController::find($id);
        $airport->update($request->all());
        return response()->json('successfully updated');

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
            AirportController::create(
                $request->all()
            );
        }
        catch (\Exception $e){
            abort(404);
        }
        return response()->json('successfully added');
    }
}

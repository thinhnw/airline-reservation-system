<?php

namespace App\Http\Controllers;

use App\Models\Airport;
use Illuminate\Http\Request;

class AirportController extends Controller
{
    //
    public function all(){
        $data=Airport::paginate(10);
        $airport=null;
        return view("airports",["data"=>$data,'airport'=>$airport]);
    }

//    GET_DATA
    public function index(){
        $data=Airport::paginate(10);
        return response()->json([

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
        $airport=Airport::find($id);
        $airport->update($request->all());
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
            Airport::create(
                $request->all()
            );
        }
        catch (\Exception $e){
            abort(404);
        }
        return response()->json('successfully added');
    }
}

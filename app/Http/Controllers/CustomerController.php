<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class CustomerController extends Controller
{
    //GET_DATA
    public function index(){
        $customer=Customer::paginate(10);
        return response()->json([
            'customers'=>$customer
        ]);
    }
    public function findUser($id){
        $customer=Customer::findOrFail($id);
        return response()->json([
            'customer'=>$customer
        ]);
    }
//    EDIT
    public function edit($id){
        $customer=Customer::findOrFail($id);
        return response()->json([
            'customer'=>$customer
        ]);

    }

//    UPDATE
    public function update($id,Request $request){
        $customer=Customer::find($id);
        $customer->update([
            'first_name'=> $request->first_name,
            'last_name'=>$request->last_name,
            'gender'=>$request->gender,
            'email'=>$request->email,
            'user_type'=>'Customer',
            'password'=>Hash::make($request->password)
        ]);
        return response()->json('successfully updated');

    }

//    DELETE
    public function delete($id){
        $customer=Customer::findOrFail($id);
        $customer->delete();
        return response()->json('successfully deleted');
    }

//    SAVE
    public function save(Request $request){
        try {
            Customer::create([
                'first_name'=> $request->first_name,
                'last_name'=>$request->last_name,
                'gender'=>$request->gender,
                'email'=>$request->email,
                'user_type'=>$request->user_type,
                'password'=>Hash::make($request->password)
                ]
            );
        }
        catch (\Exception $e){
            abort(404);
        }
        return response()->json('successfully added');
    }
}

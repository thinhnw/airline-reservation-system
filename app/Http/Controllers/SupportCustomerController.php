<?php

namespace App\Http\Controllers;


use App\Models\SupportCustomer;
use Illuminate\Http\Request;
use mysql_xdevapi\Exception;

class SupportCustomerController extends Controller
{
    //
    public function index(){
        $sp_customer=SupportCustomer::paginate(10);
        return response()->json([
            'sp_customers'=>$sp_customer
        ]);
    }
    public function save(Request $request){
        try {
            SupportCustomer::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'class'=>$request->class,
                'content'=>$request->__get('content'),
            ]);
        }catch (\Exception $exception){
            abort(404);
        }
    }
    public function delete($id){
        $customerFeedback=SupportCustomer::findOrFail($id);
        $customerFeedback->delete();
        return response()->json('successfully deleted');
    }
}

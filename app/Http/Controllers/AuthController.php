<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Throwable;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('JWT', ['except' => ['login', 'register']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized', 'message' => 'Wrong Email or Password!'], 200);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60 * 24,
            'userInfo' => Auth::user()
        ]);
    }

    public function register(Request $request) {
        try {
            $request->validate([
                'email' => ['required', 'unique:users' , 'max:255'],
                'first_name' => 'required',
                'last_name' => 'required',
                'gender' => 'required',
                'password' => ['required' , 'min:6']
            ]);
            $data = array();
            $data['last_name'] = $request->last_name;
            $data['first_name'] = $request->first_name;
            $data['gender'] = $request->gender;
            $data['email'] = $request->email;
            $data['password'] = Hash::make($request->password);

            DB::table('users')->insert($data);
            return $this->login($request);
        } catch (Throwable $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 200);
        }
    }
}
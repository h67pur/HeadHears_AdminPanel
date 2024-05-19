<?php

namespace App\Http\Controllers\AuthControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    function login(Request $request)
    {
        $validatedData = $request->validate([
            'nickname' => 'required',
            'password' => 'required',
        ]);
        if (Auth::attempt([
            'nickname' => $validatedData['nickname'],
            'password' => $validatedData['password'],
        ])) {
            $request->session()->regenerate();
            return response()->json(['auth'=>true]);
        }
        else{
            return response()->json(['auth'=>false]);
        }
    }
}

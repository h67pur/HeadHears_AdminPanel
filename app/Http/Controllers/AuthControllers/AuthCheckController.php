<?php

namespace App\Http\Controllers\AuthControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthCheckController extends Controller
{
    function authCheck(Request $request){
        if ($request->isMethod('post')) {
            return response()->json(['auth' => Auth::check()]);
        }
        return redirect('/');
    }
}

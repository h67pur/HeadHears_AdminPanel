<?php

namespace App\Http\Controllers\AuthControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class AuthCheckController extends Controller
{
    public function authCheck(): JsonResponse
    {
        return response()->json(['auth' => Auth::check()]);
    }
}

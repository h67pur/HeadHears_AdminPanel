<?php

namespace App\Http\Controllers\AuthControllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    function register()
    {
        DB::table('base_users')->insert([
            'nickname'=>'heevock',
            'password'=>Hash::make('11111111'),
        ]);
    }
}
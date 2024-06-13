<?php

namespace App\Http\Controllers\AuthControllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    function register()
    {
        DB::table('admin_users')->insert([
            'nickname'=>'heevock',
            'phone' => '+795626795643',
            'email' =>'heevock@gmail.com',
            'password'=>Hash::make('11111111'),
            'failed_login_attempts' => 0,
        ]);
    }
}
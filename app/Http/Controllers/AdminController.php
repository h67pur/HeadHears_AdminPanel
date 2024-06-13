<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

class AdminController extends Controller
{

    function post(Request $request)
    {

    }

    function enter(): Factory|Application|View
    {
        return view('app');
    }
}
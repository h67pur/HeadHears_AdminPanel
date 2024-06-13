<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthControllers\AuthCheckController;
use App\Http\Controllers\AuthControllers\LogoutController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthControllers\LoginController;
use App\Http\Controllers\AuthControllers\RegisterController;

Route::group(['prefix' => '/admin'],function () {

    Route::get('/login', [AdminController::class, 'enter']);

    Route::get('/', [AdminController::class,'enter'])
        ->middleware('auth');
    Route::get('/products', [AdminController::class, 'enter'])
        ->middleware('auth');
    Route::post('/', [AdminController::class, 'post']);


    Route::post('/login', [LoginController::class,'login'])
        ->name('login');
    Route::get('/register', [RegisterController::class,'register'])
        ->name('register');
    Route::post('/auth', [AuthCheckController::class,'authCheck']);
    Route::get('/logout', [LogoutController::class,'logout']);
});

Route::domain(env('APP_URL'))->group(function () {

    Route::any('{any}', function () {
        return view('store');
    })->where('any', '.*');

});
<?php

use App\Http\Controllers\AuthControllers\AuthCheckController;
use App\Http\Controllers\AuthControllers\LogoutController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthControllers\LoginController;
use App\Http\Controllers\AuthControllers\RegisterController;

Route::get('/', function () {
    return view('app');
});
Route::post('/login', [LoginController::class,'login'])->name('login');
Route::get('/register', [RegisterController::class,'register'])->name('register');
Route::post('/auth',[AuthCheckController::class,'authCheck'])->name('authCheck');
Route::get('/logout',[LogoutController::class,'logout']);

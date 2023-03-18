<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\Auth\AuthenticationController;
use App\Http\Controllers\Tiporecursocontroller;
use App\Http\Controllers\Recursocontroller;
use App\Http\Controllers\RolController;
use App\Http\Controllers\PrivilegioController;
use Illuminate\Support\Facades\Auth;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return Auth::user();    
})->middleware('auth:api');

//get all users
Route::get('Usuarios', [UserController::class, 'getUsers']);

//get specic  users
Route::get('Usuarios/{id}', [UserController::class, 'getUserId']);

//add new user
Route::post('addUser', [UserController::class, 'addUser']);


//login user
Route::group(['namespace'=>'App\Http\Controllers\Api\Auth'],function(){    
    Route::post('/login', 'AuthenticationController@login');
    Route::post('/logout', 'AuthenticationController@logout')->middleware('auth:api');
});


//update user
Route::put('updateUser/{id}', [UserController::class, 'updateUser']);

//delete user
Route::get('deleteUser/{id}', [UserController::class, 'deleteUser']);

Route::get('getTypeRecurs', [Tiporecursocontroller::class, 'getTypeRecurs']);

Route::get('getrecurosId/{id}', [Recursocontroller::class, 'getrecurosId']);

Route::get('search', [Tiporecursocontroller::class, 'search']);

Route::get('rols', [RolController::class, 'index']);

Route::get('privilegios', [PrivilegioController::class, 'getPrivilegios']);

Route::post('addPrivilegio', [PrivilegioController::class, 'addPrivilegio']);
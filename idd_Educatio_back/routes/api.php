<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\Auth\AuthenticationController;
use App\Http\Controllers\Tiporecursocontroller;
use App\Http\Controllers\Recursocontroller;
use App\Http\Controllers\RolController;
use App\Http\Controllers\PrivilegioController;
use App\Http\Controllers\RolPrivilegioController;
use App\Http\Controllers\QuestionSecretUserController;
use App\Http\Controllers\AsociasionesController;
use App\Http\Controllers\QuestonSecretController;

use Illuminate\Routing\Router;
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

//--------------------- only users ---------------------//
Route::get('/user', function (Request $request) {
    return Auth::user();    
})->middleware('auth:api');

Route::get('Usuarios', [UserController::class, 'getUsers']);

Route::get('getUser/{id}', [UserController::class, 'getUserId']);

Route::post('addUser', [UserController::class, 'addUser']);

Route::group(['namespace'=>'App\Http\Controllers\Api\Auth'],function(){    
    Route::post('/login', 'AuthenticationController@login');
    Route::post('/loginAdmin', 'AuthenticationController@loginAdmin');
    Route::post('/logout', 'AuthenticationController@logout')->middleware('auth:api');
});

Route::post('updateUser/{id}', [UserController::class, 'updateUser']);

Route::post('updateTypeUser', [UserController::class, 'updateTypeUser']);

Route::get('deleteUser/{id}', [UserController::class, 'deleteUser']);

Route::post('resetPasswordEmail', [UserController::class, 'resetPasswordEmail']);

Route::post('changePassword/{id}', [UserController::class, 'changePassword']);

//--------------------- para los recursos ---------------------//
Route::get('getTypeRecurs', [Tiporecursocontroller::class, 'getTypeRecurs']);

Route::get('getrecurosId/{id}', [Recursocontroller::class, 'getrecurosId']);

Route::get('search', [Tiporecursocontroller::class, 'search']);



//--------------------- roles ---------------------//
Route::get('rols', [RolController::class, 'index']);

Route::post('addRol', [RolController::class, 'addRol']);

Route::delete('deleteRol/{id}', [RolController::class, 'deleteRol']);

Route::post('actualizarRol/{id}', [RolController::class, 'actualizarRol']);



//--------------------- role-privilegio ---------------------//
Route::get('getRoles/{id}', [RolPrivilegioController::class, 'getRoles']);

Route::delete('deleteRolPriv', [RolPrivilegioController::class, 'deleteRolPriv']);

Route::post('addPriRol', [RolPrivilegioController::class, 'addPriRol']);

Route::post('rolPrivUser', [RolPrivilegioController::class, 'rolPrivUser']);

Route::post('rolPrivUser2', [RolPrivilegioController::class, 'rolPrivUser2']);



//--------------------- privilegios o permisos ---------------------//
Route::get('privilegios', [PrivilegioController::class, 'getPrivilegios']);

Route::post('addPrivilegio', [PrivilegioController::class, 'addPrivilegio']);

Route::delete('deletePrivilegio/{id}', [PrivilegioController::class, 'deletePrivilegio']);



//------------------------ PasswordUserReset ------------------------//
Route::post('questionSecrectUser', [QuestionSecretUserController::class, 'recuperarPregunta']);
Route::post('respuesta', [QuestionSecretUserController::class, 'respuesta']);
Route::post('addQuestionUser/{id}', [QuestionSecretUserController::class, 'addQuestionUser']);


//--------------------------- Preguntas Secretas ---------------------------//

Route::get('getQuestion', [QuestonSecretController::class, 'getQuestion']);


//--------------------------- Preguntas Asociasiones ---------------------------//

Route::get('getAsociasiones', [AsociasionesController::class, 'index']);
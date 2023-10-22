<?php

use App\Console\Commands\DatabaseBackup;
use App\Console\Kernel;
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
use App\Http\Controllers\BackupsBDController;
use App\Http\Controllers\QuestonSecretController;
use App\Http\Controllers\ObjectivosCursoController;
use App\Http\Controllers\SeccionController;
use App\Http\Controllers\EtiquetaCursoController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\CursoUsuarioController;
use App\Http\Controllers\ImagenUserController;
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

Route::post('changePassword/{id}', [UserController::class, 'changePassword']);

// ---------------------------Registro de usuario--------------------//
Route::post('addUser', [UserController::class, 'addUser']);

//---------------------------- login y logout--------------------------//
Route::group(['namespace'=>'App\Http\Controllers\Api\Auth'],function(){    
    Route::post('/login', 'AuthenticationController@login');
    Route::post('/loginAdmin', 'AuthenticationController@loginAdmin');
    Route::post('/logout', 'AuthenticationController@logout')->middleware('auth:api');
});

Route::post('updateUser/{id}', [UserController::class, 'updateUser']);

Route::post('updateTypeUser', [UserController::class, 'updateTypeUser']);

Route::get('deleteUser/{id}', [UserController::class, 'deleteUser']);

Route::post('resetPasswordEmail', [UserController::class, 'resetPasswordEmail']);

Route::get('createResourcesByIdUser/{id}', [UserController::class, 'createResourcesByIdUser']);

Route::post('updateUser/{id}', [UserController::class, 'updateUser']);

//--------------------- para los recursos ---------------------//
Route::get('getTypeRecurs', [Tiporecursocontroller::class, 'getTypeRecurs']);

Route::get('getrecurosUsersId/{id}', [Recursocontroller::class, 'getrecurosUsersId']);

Route::get('getrecurosId/{id}', [Recursocontroller::class, 'getrecurosId']);

Route::get('search', [Tiporecursocontroller::class, 'search']);

Route::post('addTypeRecurso', [Tiporecursocontroller::class, 'addTypeRecurso']);

Route::post('agregarImg/{id}', [Tiporecursocontroller::class, 'agregarImg']);



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

//--------------------------- Recursos ---------------------------//
Route::get('getRecursos', [Recursocontroller::class, 'getRecursos']);
Route::post('getrecurosIdUser', [Recursocontroller::class, 'getrecurosIdUser']);

Route::post('addRecurso', [Recursocontroller::class, 'addRecurso']);
Route::get('getrecurosEditId/{id}', [Recursocontroller::class, 'getrecurosEditId']);
Route::get('searchRecursos', [Recursocontroller::class, 'searchRecursos']);
Route::get('datosUsuarioCurso/{id}', [Recursocontroller::class, 'datosUsuarioCurso']);


//--------------------------- Objetivo cursos ---------------------------//
Route::post('showObejtivoCursoId', [ObjectivosCursoController::class, 'showObejtivoCursoId']);

//--------------------------- Secciones cursos ---------------------------//
Route::post('showSeccionCursoId', [SeccionController::class, 'showSeccionCursoId']);
Route::get('handle', [DatabaseBackup::class, 'handle']);
Route::get('seccionesCursoId/{id}', [SeccionController::class, 'seccionesCursoId']);


//--------------------------- BackUp ---------------------------//
Route::post('bdRespose', [BackupsBDController::class, 'bdRespose']);
Route::get('index', [BackupsBDController::class, 'index']);


//--------------------------- Etiquetas curso ---------------------------//
Route::get('etiquetasCursos', [EtiquetaCursoController::class, 'index']);

//--------------------------- Machin Learning ---------------------------//
Route::post('getDatML', [Recursocontroller::class, 'obtenerDatos']);
Route::get('getDataIngles', [CourseController::class, 'obtenerDatosIngles']);


Route::post('recursoUsuario', [CursoUsuarioController::class, 'store']);
Route::post('recursoidUsuario', [CursoUsuarioController::class, 'getcursosidUser']);
Route::post('getcursosUserid', [CursoUsuarioController::class, 'getcursosUserid']);
Route::get('obtenerDatosML', [Recursocontroller::class, 'obtenerDatosML']);

//--------------------------- Imagenes de usuario ---------------------------//
Route::post('imgUser/{id}', [ImagenUserController::class, 'imgUser']);
Route::post('imgBackGroundUser/{id}', [ImagenUserController::class, 'imgBackGroundUser']);
Route::get('imgByIdUser/{id}', [ImagenUserController::class, 'imgByIdUser']);


//--------------------------- Editar curso ---------------------------//
Route::post('vistapreviaCurso/{id}', [Recursocontroller::class, 'vistapreviaCurso']);
Route::post('updateCursoUserId/{id}', [Recursocontroller::class, 'updateCursoUserId']);

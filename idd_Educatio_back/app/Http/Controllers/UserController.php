<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Mail\resetPassword;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{
    public function getUsers(){
        return response()->json(User::all(), 200);
    }

    public function get_someone_Users(Request $request){
        $perPage = $request->input('cantUsers',20); // Si el parámetro per_page no se proporciona en la solicitud, se utilizará un valor predeterminado de 20.   

    // Realizar la consulta paginada
    $users = User::paginate($perPage);

    return response()->json($users, 200);
    }

    public function getUserId($id){
        $user = User::find($id);

        if(is_null($user)) {
            return response()->json(['message' => 'Usuario no encontrado'], 404);
        }

        return response()->json($user::find($id),200);
    }

    public function addUser(Request $request){        
        $user = new User;    

        $repetido = User::select('email')->where('email', $request->email)->get();
        $repetido2 = User::select('nameUser')->where('nameUser', $request->nameUser)->get();
        $repetido3 = User::select('phone')->where('phone', $request->name)->get();

        if(count($repetido) != 1){
            if(count($repetido2) != 1){
                if(count($repetido3) != 1){
                    $user -> name = $request->name;
                    $user -> nameUser = $request->nameUser;
                    $user -> email = $request->email;
                    $user -> phone = $request->phone;                    
                    $user -> password = Hash::make($request->password);

                    if(!$request->typeUser){
                        $user -> typeUser = 1;
                    }else{
                        $user -> typeUser = $request->typeUser;                    
                    }      
            
                    $user -> save();
            
                    return response()->json(['success' => 'Registrado con exito ya puede iniciar sesion'], 200);                
                }else{
                    return response()->json(['error' => 'Telefono ya registrado'], 200);
                }
            }else{
                return response()->json(['error' => 'Nombre de usuario ya esta en uso'], 200);
            }
        }else{
            return response()->json(['error' => 'Correo electronico ya registrado'], 200);
        }

        
    }

    public function updateTypeUser(Request $request){
        $user = User::findOrFail($request->id);

        if(is_null($user)){
            return response(['error'=>'Error al actualizar'],200);
        }

        $user -> typeUser = 2;
        $user -> save();        
        return response(['success'=>'Actualizado'],200);
    }

    public function updateUser(Request $request, $id){
        $user = User::findOrFail($id);

        if(is_null($user)){
            return response(['error'=>'Error al actualizar'],200);
        }
        
        $user->update(request()->all());
        return response(['success'=>'Actualizado'],200);
    }

    public function deleteUser(Request $request, $id){
        $user = User::find($id);

        if(is_null($user)) {
            return response()->json(['message' => 'Usuario no encontrado'], 404);
        }

        $user->delete();
        return response()->json(null, 204);
    }


    public function resetPasswordEmail(Request $request){
        $userId = User :: select('id')->where('email',$request->email)->first();    
        $user = User::findOrFail($userId)->first();      
        

        if($user){
            $password=Str::random(8);
            $p=Hash::make($password);        
            $user->update(['password'=>$p]);            
            
            $b='IDD Education';
            $c='iddEducation@email.com';
            $d=$request->email;

            $data[]=[$password,$b,$c,$d];
            Mail::send('correo.newPassword', $data, function($msg) use($password,$b,$c, $d){
                $msg->from($c,$b);
                $msg->subject($password);
                $msg->to($d);
            });

            return response()->json($user, 200);
        }else{
            return response()->json(['error'=>'no se puede actualizar tu contraseña'], 200);
        }
    
    }

    public function changePassword(Request $request, $id){
        $userPasswor = User :: where('id',$id)->first();                
        
        if(!(Hash::check($request->passwordBefore,$userPasswor->password))){
            return response()->json(['error'=>'Contraseña Incorrecta'], 200);
        }    

        $pwd=Hash::make($request->passwordNew);

        $userPasswor->update(['password'=> $pwd]);

        return response()->json(['success'=>'Contraseña Actualizada con exito'], 200);

        
    }

    
    
}


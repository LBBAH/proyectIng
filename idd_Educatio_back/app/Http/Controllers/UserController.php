<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function getUsers(){
        return response()->json(User::all(), 200);
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
        $repetido3 = User::select('phone')->where('phone', $request->phone)->get();

        if(count($repetido) != 1){
            if(count($repetido2) != 1){
                if(count($repetido3) != 1){
                    $user -> name = $request->name;
                    $user -> nameUser = $request->nameUser;
                    $user -> email = $request->email;
                    $user -> phone = $request->phone;                    
                    $user -> password = Hash::make($request->password);




                    $user -> typeUser = 1;
            
                    $user -> save();
            
                    return response()->json(['message' => 'Registrado con exito ya puede iniciar sesion'], 200);                
                }else{
                    return response()->json(['message' => 'Telefono ya registrado'], 200);
                }
            }else{
                return response()->json(['message' => 'Nombre de usuario ya esta en uso'], 200);
            }
        }else{
            return response()->json(['message' => 'Correo electronico ya registrado'], 200);
        }

        
    }

    public function updateUser(Request $request, $id){
        $user = User::findOrFail($request->$id);
        $user -> _name = $request->_name;
        $user -> nameUser = $request->nameUser;
        $user -> email = $request->email;
        $user -> phone = $request->phone;
        $user -> password = $request->password;
        $user -> typeUser = 1;

        $user -> save();
        return response($user,200);
    }

    public function deleteUser(Request $request, $id){
        $user = User::find($id);

        if(is_null($user)) {
            return response()->json(['message' => 'Usuario no encontrado'], 404);
        }

        $user->delete();
        return response()->json(null, 204);
    }

    
    
}

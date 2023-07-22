<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthenticationController extends Controller
{
    public function login(Request $request){    
                
        /*$chochos = User::where(function ($query) {
            $query->where('typeUser', '=', 1)
                  ->orWhere('typeUser', '=', 11);
        })->where('email',$request->email)->get();*/

        $chochos = User::where(function ($query) use ($request) {
            $query->where('typeUser', '=', 1)
                  ->orWhere('typeUser', '=', 5);
        })->where('email', $request->email)->get();
        
        if($chochos){
            $login = $request->validate([
                'email' => ['required'],
                'password' => ['required'],
            ]);
            
            if(!Auth::guard()->attempt($login)){
                return response()->json(['error' => 'Usuario no encontrado'], 200);
            }  
            
            /**
             * @var User $user
            */
            $user= Auth::user();
        
            $token =$user->createToken($user->name);
        
            return response([
                'id'=>$user->id,
                'name'=>$user->name,
                'nameUser'=>$user->nameUser,
                'email'=>$user->email,
                'phone'=>$user->phone,
                'typeUser'=>$user->typeUser,
                'token'=>$token->accessToken,
                'token_expies_at'=>$token->token->expires_at,
            ],200);
        }

        return response()->json(['error' => 'Nivel de acceso no autorizado'], 200);            
    }

    public function loginAdmin(Request $request){    
        
        $chochos = User::where('email',$request->email)->where('typeUser','!=',1)->get();
        if(count($chochos) == 1 ){
            $login = $request->validate([
                'email' => ['required'],
                'password' => ['required'],
            ]);
            
    
            
            if(!Auth::guard()->attempt($login)){
                return response()->json(['error' => 'Usuario no encontrado'], 200);
            }
                
            
            /**
             * @var User $user
            */
            $user= Auth::user();
        
            $token =$user->createToken($user->name);
        
            return response([
                'id'=>$user->id,
                'name'=>$user->name,
                'nameUser'=>$user->nameUser,
                'phone'=>$user->phone,
                'email'=>$user->email,
                'typeUser'=>$user->typeUser,
                'token'=>$token->accessToken,
                'token_expies_at'=>$token->token->expires_at,
            ],200);
        }

        return response()->json(['error' => 'Nivel de acceso no autorizado'], 200);                
    }

    public function logout(Request $request){
        $this->validate($request,[
            'allDevice' =>'required|boolean'
        ]);

        /**
         * @var user $user
         */

        $user =Auth::user();

        if($request->allDevice){
            $user->tokens->each(function($token){
                $token->delete();
            });
            return response (['message'=>'Sesion cerrada'],200);
        }

        $userToken = $user->token();
        $userToken->delete();
        return response (['message'=>'Sesion cerrada'],200);
    }
}

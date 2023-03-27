<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recurso;
use App\Models\Tiporecurso;

class Recursocontroller extends Controller
{
    public function getRecursos(){
        return response()->json(Recurso::all());
    }

    public function getrecurosId($id){
        $band = Recurso::where('tipyRec',$id)->where('id_Estado','!=',1)->get();  

        $band2 = Tiporecurso::find($id);

        if(is_null($band2)) {
            return response()->json(['warning' => 'Error 400 de peticion']);
        }

        return \response()->json($band);
    }

    public function getrecurosEditId(Request $request){
       
        $repetido = Recurso::select('recursos.id','recursos.name as nombre','recursos.Descripcion','recursos.tipo','recursos.precio','asociasiones.asociasion','tiporecursos.name','recursos.tipyRec','recursos.vistaprevia')->
                    join('asociasiones','asociasiones.id','=','recursos.id_asociasion')->
                    join('tiporecursos','tiporecursos.id','=','recursos.tipyRec')->
                    where('recursos.id',$request->id)->
                    get();  

        return \response()->json($repetido,200);
    }

    public function getrecurosIdUser(Request $request){
        $band = Recurso::where('id_Usuario',$request->id)->get();  

        return \response()->json($band,200);
    }

    public function addRecurso(Request $request){        
        $user = new Recurso;    

        $repetido = Recurso::select('name')->where('name', $request->name)->get();        

        if(count($repetido) != 1){            
                    $user -> name = $request->name;
                    $user -> Descripcion = $request->Descripcion;
                    $user -> tipo = $request->tipo;
                    $user -> precio = $request->precio;
                    $user -> id_Usuario = $request->id_Usuario;                    
                    $user -> id_asociasion = $request->id_asociasion;                    
                    $user -> id_Estado = 1;                    
                    $user -> tipyRec = $request->tipyRec;  
                    $user -> vistaprevia = '';  
            
                    $user -> save();
            
                    return response()->json(['success' => 'Registrado con exito buscalo entre tus cursos para publicarlo'], 200);
        }else{
            return response()->json(['error' => 'Curso ya registrado'], 200);
        }

        
    }

}

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
        $band = Recurso::where('tipyRec',$id)->get();  

        $band2 = Tiporecurso::find($id);

        if(is_null($band2)) {
            return response()->json(['warning' => 'Error 400 de peticion']);
        }

        return \response()->json($band);
    }
}

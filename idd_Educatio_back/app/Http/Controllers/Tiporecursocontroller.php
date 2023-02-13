<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tiporecurso;

class Tiporecursocontroller extends Controller
{
    public function getTypeRecurs(){
        return response()->json(Tiporecurso::all(), 200);
    }

    public function search(Request $request){
        
        $posts = Tiporecurso::where('name', 'LIKE', '%'.$request->band.'%')->get();
        
        return \response()->json($posts);
    }
}

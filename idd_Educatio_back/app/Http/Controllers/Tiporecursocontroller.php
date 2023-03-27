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

    public function addTypeRecurso(Request $request){
        
        $user = new Tiporecurso;    

        $repetido = Tiporecurso::select('name')->where('name', $request->name)->get();        

        if(count($repetido) != 1){
            
            $user -> name = $request->name;
            $user -> description = $request->description;
            $user -> img = '';
            
            $user -> save();
            
            return response()->json(['success' => 'Tipo recurso registrado'], 200);                             
        }else{
            return response()->json(['error' => 'Tipo de recurso ya existe'], 200);
        }
    }

    public function agregarImg(Request $request, $id){        
    
        $tipoRecurso = Tiporecurso :: where('id',$id)->first();       

        $file=$request->file('file');
        $originalName= time(). $file->getClientOriginalName();

        $file->move('img/imgTipoRecurso/',  $originalName);
        $tipoRecurso->update(['img'=> $originalName]);
        return response()->json(['success'=>'Imagen actualizada con exito'], 200);
       
        /*if($request->file('img')){
            foreach ($request->file('img') as $file) {
            
                $filename = 'collection_' . time() . $file->getClientOriginalName();
                $file->move('http://localhost/imagenesWeb/imgTipoRecurso/', $filename); //Ruta para guardar las imagenes
                return response()->json($filename, 200);
            }
            //$file->store('public/img'); //Ruta para guardar las imagenes
            /*$filemodel = new imagenes();
            $filemodel->nameImagen = $filename;
            $filemodel->name_small = $filename;
            $filemodel->receta_id = $id_re;    
            if ($filemodel->save()) {
                $response['success'] = 'true';
                $response['message'] = 'images Added Successfully!';
            } else {
                $response['success'] = 'false';
                $response['message'] = 'Error in saving data try again!';
            }
        }*/ 
    }
}

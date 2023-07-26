<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recurso;
use App\Models\Tiporecurso;
use Illuminate\Support\Facades\DB;


class Recursocontroller extends Controller
{
    public function getRecursos(Request $request){
    
        return response()->json(Recurso::all());
    }


    public function getrecurosUsersId(Request $request, $id){

        $perPage = $request->input('per_page', 20); // Obtiene el número de elementos por página, con un valor predeterminado de 20
        $datos = Recurso::where('id_Usuario',$id)->paginate($perPage);
           
        /*$band2 = Tiporecurso::find($id);

        if(is_null($band2)) {
            return response()->json(['warning' => 'Error 400 de peticion']);
        }*/
        
        return response()->json($datos);
      
    }

    public function getrecurosId(Request $request, $id){

        $perPage = $request->input('per_page', 20); // Obtiene el número de elementos por página, con un valor predeterminado de 20
        $datos = Recurso::where('tipyRec','=' ,$id)->where('id_Estado','!=',1)->paginate($perPage)   ;
           
        $band2 = Tiporecurso::find($id);

        if(is_null($band2)) {
            return response()->json(['warning' => 'Error 400 de peticion']);
        }
        
        return response()->json($datos);


        /*$band = Recurso::where('tipyRec',$id)->where('id_Estado','!=',1)->get();  

        $band2 = Tiporecurso::find($id);

        if(is_null($band2)) {
            return response()->json(['warning' => 'Error 400 de peticion']);
        }

        return \response()->json($band);*/
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


    public function searchRecursos(Request $request){
        
        $posts = Recurso::where('name', 'LIKE', '%'.$request->name.'%')->get();
        
        return \response()->json($posts);
    }

    public function obtenerDatos(Request $request)
    {
        $data = $request->json()->all(); // Obtener el contenido JSON de la solicitud como un array

        $valores = array_column($data, 'nombre'); // Obtener los valores del campo 'nombre'

        // Realizar la consulta a la base de datos utilizando los valores
        $resultados = Recurso::whereIn('name', $valores)->get();

        // Retornar los resultados en la respuesta de la API
        return response()->json($resultados);       
    }


    public function obtenerDatosML(Request $request)
    {
        $resultado = DB::table('recursos')
            ->select('recursos.id', DB::raw('GROUP_CONCAT(DISTINCT tiporecursos.name) as tipoRecurso') , DB::raw('GROUP_CONCAT(DISTINCT recursos.name) as nombre_curso'), DB::raw('GROUP_CONCAT(DISTINCT etiquetas.name SEPARATOR ",") as etiquetas '), DB::raw('GROUP_CONCAT(DISTINCT objectivos_cursos.objetivo SEPARATOR ",") as objetivos'))            
            ->leftJoin('etiqueta_cursos', 'recursos.id', '=', 'etiqueta_cursos.id_curso')            
            ->leftJoin('objectivos_cursos', 'recursos.id', '=', 'objectivos_cursos.id_curso')    
            ->leftJoin('etiquetas', 'etiqueta_cursos.id_etiqueta', '=', 'etiquetas.id')
            ->leftJoin('tiporecursos', 'recursos.tipyRec', '=', 'tiporecursos.id')
            ->groupBy('recursos.id')
            ->get();

        $nuevasColumnas = [];        

        foreach ($resultado as $registro) {
            $columnas = explode(',', $registro->etiquetas);
            $columnas2 = explode(',', $registro->objetivos);
            $nuevasColumnas[] = array_merge(['id' => $registro->id],['tiporecurso' => $registro->tipoRecurso],['nombre_curso' => $registro->nombre_curso], $columnas, $columnas2);
        }
        
        
        return response()->json($nuevasColumnas);   

        /*$resultado2 = DB::table('recursos')
            ->select('recursos.id', DB::raw('GROUP_CONCAT(objectivos_cursos.objetivo) as objetivos'))
            ->leftJoin('objectivos_cursos', 'recursos.id', '=', 'objectivos_cursos.id_curso')        
            ->groupBy('recursos.id')
            ->get();


        $resultado = DB::table('recursos')
            ->select('recursos.id', DB::raw('GROUP_CONCAT(objectivos_cursos.objetivo) as objetivos'))
            ->leftJoin('objectivos_cursos', 'recursos.id', '=', 'objectivos_cursos.id_curso')        
            ->groupBy('recursos.id')
            ->get();
            */
    }

    

}

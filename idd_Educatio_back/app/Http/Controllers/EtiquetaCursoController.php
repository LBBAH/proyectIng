<?php

namespace App\Http\Controllers;

use App\Models\EtiquetaCurso;
use Illuminate\Http\Request;

class EtiquetaCursoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {


        $registrosAgrupados = EtiquetaCurso::join('etiquetas', 'etiqueta_cursos.id_etiqueta', '=', 'etiquetas.id')
        ->join('recursos', 'etiqueta_cursos.id_curso', '=', 'recursos.id')        
        ->select('etiqueta_cursos.id_curso',EtiquetaCurso::raw('GROUP_CONCAT(DISTINCT recursos.name SEPARATOR ",") as nombreRecurso'), EtiquetaCurso::raw('GROUP_CONCAT(DISTINCT recursos.tipyRec SEPARATOR ",") as typoRecursos'), EtiquetaCurso::raw('GROUP_CONCAT(etiquetas.name SEPARATOR ",") as etiquetas'))
        ->groupBy('id_curso')
        ->get();
     
        $nuevasColumnas = [];


        foreach ($registrosAgrupados as $registro) {
            $columnas = explode(',', $registro->etiquetas);
            $nuevasColumnas[] = array_merge(['id' => $registro->id_curso],['nombreCurso' => $registro->nombreRecurso],['tiporecurso' => $registro->typoRecursos], $columnas);
        }
        return response()->json($nuevasColumnas);

        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EtiquetaCurso  $etiquetaCurso
     * @return \Illuminate\Http\Response
     */
    public function show(EtiquetaCurso $etiquetaCurso)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\EtiquetaCurso  $etiquetaCurso
     * @return \Illuminate\Http\Response
     */
    public function edit(EtiquetaCurso $etiquetaCurso)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\EtiquetaCurso  $etiquetaCurso
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, EtiquetaCurso $etiquetaCurso)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EtiquetaCurso  $etiquetaCurso
     * @return \Illuminate\Http\Response
     */
    public function destroy(EtiquetaCurso $etiquetaCurso)
    {
        //
    }
}

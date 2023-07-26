<?php

namespace App\Http\Controllers;

use App\Models\cursoUsuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CursoUsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new cursoUsuario;    

        $user -> id_curso = $request->id_curso;
        $user -> id_usuario	 = $request->id_usuario	;                 
            
        $user -> save();

        return response()->json(['success' => 'Este curso ya es tuyo, ahora puedes usarlo :)'], 200);                
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\cursoUsuario  $cursoUsuario
     * @return \Illuminate\Http\Response
     */
    public function show(cursoUsuario $cursoUsuario)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\cursoUsuario  $cursoUsuario
     * @return \Illuminate\Http\Response
     */
    public function edit(cursoUsuario $cursoUsuario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\cursoUsuario  $cursoUsuario
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, cursoUsuario $cursoUsuario)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\cursoUsuario  $cursoUsuario
     * @return \Illuminate\Http\Response
     */
    public function destroy(cursoUsuario $cursoUsuario)
    {
        //
    }
    public function getcursosidUser(Request $request)
    {        
        $registro = cursoUsuario::where('id_curso', $request->id_curso)->where('id_usuario', $request->id_usuario)->first();

        if ($registro) {
            
            return response()->json(['success' => true]);                
        } else {
            return response()->json(['error' => false]);                
        }
    
    }


    public function getcursosUserid(Request $request)
    {        

        $usuarioId = $request->id_usuario;

        $resultado = DB::table('recursos')
            ->whereIn('id', function ($query) use ($usuarioId) {
                $query->select('id_curso')
                    ->from('curso_usuarios')
                    ->where('id_usuario', $usuarioId);
            })
            ->get();
        return response()->json($resultado);

    }

    
}

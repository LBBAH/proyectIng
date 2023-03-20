<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePrivilegioRequest;
use App\Http\Requests\UpdatePrivilegioRequest;
use App\Models\Privilegio;
use Illuminate\Http\Request;

class PrivilegioController extends Controller
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePrivilegioRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePrivilegioRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Privilegio  $privilegio
     * @return \Illuminate\Http\Response
     */
    public function show(Privilegio $privilegio)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Privilegio  $privilegio
     * @return \Illuminate\Http\Response
     */
    public function edit(Privilegio $privilegio)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePrivilegioRequest  $request
     * @param  \App\Models\Privilegio  $privilegio
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePrivilegioRequest $request, Privilegio $privilegio)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Privilegio  $privilegio
     * @return \Illuminate\Http\Response
     */
    public function destroy(Privilegio $privilegio)
    {
        //
    }

    public function getPrivilegios(){
        return response()->json(Privilegio::all(), 200);
    }

    public function addPrivilegio(Request $request){        
        $privilegio = new Privilegio;    

        $repetido = Privilegio::select('description')->where('description', $request->description)->get();        

        if(count($repetido) != 1){            
            $privilegio -> description = $request->description;           
            
            $privilegio -> save();
            
            return response()->json(['success' => 'Permiso registrado'], 200);                
               
        }else{
            return response()->json(['error' => 'Permiso ya existe'], 200);
        }
        
    }

    public function deletePrivilegio($id){
        $privilegio = Privilegio::find($id);

        $res = Privilegio::select('privilegios.id')
        ->whereIn('privilegios.id', function($query){
            $query->select('id_privilegio')->from('rol__privilegios');
        })->where('id', $id)->get()
        ;

        if(count($res)){
            return response()->json(['error'=>'No se puede eliminar ya que afecta a otros registros'], 200);
        }else{
            $privilegio->delete();
            return response()->json(['success'=>'eliminado con exito'], 200);
        }
    }


    public function pruebas(){
        $res = Privilegio::select('privilegios.id')
        ->whereIn('privilegios.id', function($query){
            $query->select('id_privilegio')->from('rol__privilegios');
        })->where('id','=',1)->get()
        ;

        if(count($res)){
            return response()->json(['error'=>'No se puede eliminar ya que afecta a otros registros'], 202);
        }else{
            return response()->json(['success'=>'eliminado con exito'], 202);
        }
    
    }
   
}

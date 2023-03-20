<?php

namespace App\Http\Controllers;

use App\Http\Requests\Storerol_PrivilegioRequest;
use App\Http\Requests\Updaterol_PrivilegioRequest;
use App\Models\rol_Privilegio;
use Illuminate\Http\Request;

class RolPrivilegioController extends Controller
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
     * @param  \App\Http\Requests\Storerol_PrivilegioRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Storerol_PrivilegioRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\rol_Privilegio  $rol_Privilegio
     * @return \Illuminate\Http\Response
     */
    public function show(rol_Privilegio $rol_Privilegio)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\rol_Privilegio  $rol_Privilegio
     * @return \Illuminate\Http\Response
     */
    public function edit(rol_Privilegio $rol_Privilegio)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Updaterol_PrivilegioRequest  $request
     * @param  \App\Models\rol_Privilegio  $rol_Privilegio
     * @return \Illuminate\Http\Response
     */
    public function update(Updaterol_PrivilegioRequest $request, rol_Privilegio $rol_Privilegio)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\rol_Privilegio  $rol_Privilegio
     * @return \Illuminate\Http\Response
     */
    public function destroy(rol_Privilegio $rol_Privilegio)
    {
        //
    }

    public function getRoles($id){
        $repetido = rol_Privilegio::select('rol__privilegios.id','rols.rol','rol__privilegios.id_rol','privilegios.description','rol__privilegios.id_privilegio')->
                    join('rols','rols.id','=','rol__privilegios.id_rol')->
                    join('privilegios','privilegios.id','=','rol__privilegios.id_privilegio')->
                    where('rol__privilegios.id_rol',$id)->
                    get();        

        return response()->json($repetido, 200);                 
    }

    public function deleteRolPriv(Request $request){
        $repetido = rol_Privilegio::where('id_privilegio',$request->idPrv)->where('id_rol',$request->idRol);

        if($repetido){
            $repetido->delete();
            return response()->json(['success'=>'Elminado con exito'], 200);                 
        }
        return response()->json(['error'=>'Error'], 200);
        
    }

    public function addPriRol(Request $request){        
        $user = new rol_Privilegio;    

        $repetido = rol_Privilegio::where('id_rol',$request->id_rol)->where('id_privilegio', $request->id_privilegio)->get();        

        if(count($repetido) != 1){
                $user -> id_rol = $request->id_rol;
                $user -> id_privilegio = $request->id_privilegio;                
            
                $user -> save();
            
                return response()->json(['success' => 'Registrado con exito'], 200);
                
        }else{
            return response()->json(['error' => 'Este rol ya tiene este privilegio'], 200);
        }

        
    }

}

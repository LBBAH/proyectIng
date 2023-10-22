<?php

namespace App\Http\Controllers;

use App\Models\ImagenUser;
use Illuminate\Http\Request;

class ImagenUserController extends Controller
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store()
    {
        
    
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ImagenUser  $imagenUser
     * @return \Illuminate\Http\Response
     */
    public function show(ImagenUser $imagenUser)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ImagenUser  $imagenUser
     * @return \Illuminate\Http\Response
     */
    public function edit(ImagenUser $imagenUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ImagenUser  $imagenUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ImagenUser $imagenUser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ImagenUser  $imagenUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(ImagenUser $imagenUser)
    {
        //
    }


    public function imgUser(Request $request, $id){

        $perfilUser = ImagenUser :: where('id_usuario',$id)->first();   
        
        if($perfilUser){
            $file=$request->file('file');
            $originalName= time(). $file->getClientOriginalName();

            $file->move('img/imgUser/',  $originalName);
            $perfilUser->update(['perfil_user'=> $originalName]);
            return response()->json(['success'=>'Imagen actualizada con exito'], 200);
        }else{
            $file = $request->file('file');
            $originalName = time() . $file->getClientOriginalName();
            $file->move('img/imgUser/', $originalName);
            ImagenUser::create([
                'id_usuario' => $id, // Asegúrate de tener esto si es necesario
                'perfil_user' => $originalName,
                'background_user' => ''
            ]);
            return response()->json(['success' => 'Imagen registrada con éxito'], 200);
        }
    }

    public function imgBackGroundUser(Request $request, $id){
        
        $perfilUser = ImagenUser :: where('id_usuario',$id)->first();   
        
        if($perfilUser){
            $file=$request->file('file');
            $originalName= time(). $file->getClientOriginalName();

            $file->move('img/imgBackGroundUser/',  $originalName);
            $perfilUser->update(['background_user'=> $originalName]);
            return response()->json(['success'=>'Imagen actualizada con exito'], 200);
        }else{
            $file = $request->file('file');
            $originalName = time() . $file->getClientOriginalName();
            $file->move('img/imgBackGroundUser/', $originalName);
            ImagenUser::create([
                'id_usuario' => $id, // Asegúrate de tener esto si es necesario
                'perfil_user' => '',
                'background_user' => $originalName
            ]);
            return response()->json(['success' => 'Imagen registrada con éxito'], 200);
        }
    }

    public function imgByIdUser($id){        
        $perfilUser = ImagenUser :: where('id_usuario',$id)->first();   
        
        if($perfilUser){            
            return response()->json($perfilUser, 200);
        }else{        
            return response()->json(['error' => 'Sin imagenes de portadas o perfil'], 200);
        }
    }
}

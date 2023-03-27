<?php

namespace App\Http\Controllers;

use App\Models\backupsBD;
use Illuminate\Http\Request;

class BackupsBDController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return \response()->json(backupsBD::all(),200);
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
     * @param  \App\Models\backupsBD  $backupsBD
     * @return \Illuminate\Http\Response
     */
    public function show(backupsBD $backupsBD)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\backupsBD  $backupsBD
     * @return \Illuminate\Http\Response
     */
    public function edit(backupsBD $backupsBD)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\backupsBD  $backupsBD
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, backupsBD $backupsBD)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\backupsBD  $backupsBD
     * @return \Illuminate\Http\Response
     */
    public function destroy(backupsBD $backupsBD)
    {
        //
    }


    public function bdRespose(Request $request){
        $newBDrespaldo = new backupsBD ;
        $newBDrespaldo -> name = $request->name;
        $newBDrespaldo -> url = $request->url;        
        $newBDrespaldo -> save();

        return \response()->json($newBDrespaldo,200);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\asociasiones;
use Illuminate\Http\Request;

class AsociasionesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(asociasiones::all(), 200);
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
     * @param  \App\Models\asociasiones  $asociasiones
     * @return \Illuminate\Http\Response
     */
    public function show(asociasiones $asociasiones)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\asociasiones  $asociasiones
     * @return \Illuminate\Http\Response
     */
    public function edit(asociasiones $asociasiones)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\asociasiones  $asociasiones
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, asociasiones $asociasiones)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\asociasiones  $asociasiones
     * @return \Illuminate\Http\Response
     */
    public function destroy(asociasiones $asociasiones)
    {
        //
    }
}

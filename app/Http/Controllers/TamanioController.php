<?php

namespace App\Http\Controllers;

use App\Models\Tamanio;
use Illuminate\Http\Request;

class TamanioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tamanios=Tamanio::all();
        return response()->json([
            "respuesta"=>$tamanios
        ]);
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
        $tamanio = Tamanio::create($request->post());
        return response()->json([
            "respuesta"=>$tamanio
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $tamanio=Tamanio::find($id);
        if($tamanio)
        {
            $tamanio->fill($request->post())->save();
            return response()->json([
                "respuesta"=>$tamanio
            ]);
        }
        else
        {
            return response()->json([
                "resultado"=>"fail"
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        $result=Tamanio::destroy($id);
        if($result)
        {
            return response()->json([
                "resultado"=>"ok"
            ]);
        }
        else
        {
            return response()->json([
                "resultado"=>"fail"
            ]);
        }
    }
}

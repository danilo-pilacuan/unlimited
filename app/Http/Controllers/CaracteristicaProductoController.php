<?php

namespace App\Http\Controllers;

use App\Models\CaracteristicaProducto;
use Illuminate\Http\Request;

class CaracteristicaProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $caracteristicasProducto=CaracteristicaProducto::with('Producto')->get();
        return response()->json([
            "respuesta"=>$caracteristicasProducto
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
        $caracteristicaProducto = CaracteristicaProducto::create($request->post());
        return response()->json([
            "respuesta"=>$caracteristicaProducto
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(CaracteristicaProducto $caracteristicaProducto)
    {
        return response()->json($caracteristicaProducto);
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
    public function update(Request $request,$id)
    {
        $caracteristicaProducto=CaracteristicaProducto::find($id);
        if($caracteristicaProducto)
        {
            $caracteristicaProducto->fill($request->post())->save();
            return response()->json([
                "respuesta"=>$caracteristicaProducto
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
        $result=CaracteristicaProducto::destroy($id);
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

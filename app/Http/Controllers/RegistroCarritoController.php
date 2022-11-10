<?php

namespace App\Http\Controllers;

use App\Models\RegistroCarrito;
use Illuminate\Http\Request;
use Symfony\Component\Console\Output\ConsoleOutput;

class RegistroCarritoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        $RegistroCarrito=RegistroCarrito::all();
        return response()->json([
            "respuesta"=>$RegistroCarrito
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
        //
        $registroCarrito = RegistroCarrito::create($request->post());
        return response()->json([
            "respuesta"=>$registroCarrito
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(RegistroCarrito $registroCarrito)
    {
        //
        return response()->json($registroCarrito);
    }

    public function getRegistrosByOrdenId($id)
    {
        $output = new ConsoleOutput();
        $output->writeln("get by ordid");

        $registros=RegistroCarrito::with('Caracteristica','TamanioProducto','TamanioCaracteristica','Producto','Orden','Orden.User')->where('idOrden',$id)->get();

        return response()->json([
            "respuesta"=>$registros
        ]);
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
        //
        $registroCarrito=RegistroCarrito::find($id);
        if($registroCarrito)
        {
            $registroCarrito->fill($request->post())->save();
            return response()->json([
                "respuesta"=>$registroCarrito
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
        $result=RegistroCarrito::destroy($id);
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

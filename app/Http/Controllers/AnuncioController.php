<?php

namespace App\Http\Controllers;

use App\Models\Anuncio;
use Illuminate\Http\Request;
use Symfony\Component\Console\Output\ConsoleOutput;

class AnuncioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $anuncios=Anuncio::all();
        return response()->json([
            "respuesta"=>$anuncios
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
        $anuncio = Anuncio::create($request->post());
        return response()->json([
            "respuesta"=>$anuncio
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Anuncio $anuncio)
    {
        $output = new ConsoleOutput();
        $output->writeln("****************************** show ***************************************************************");

        return response()->json($anuncio);
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
        $anuncio=Anuncio::find($id);
        if($anuncio)
        {
            $anuncio->fill($request->post())->save();
            return response()->json([
                "respuesta"=>$anuncio
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
    public function destroy($id)
    {
        $result=Anuncio::destroy($id);
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

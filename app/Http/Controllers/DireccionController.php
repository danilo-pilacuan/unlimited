<?php

namespace App\Http\Controllers;
use Symfony\Component\Console\Output\ConsoleOutput;
use App\Models\Direccion;
use Illuminate\Http\Request;

class DireccionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $direcciones=Direccion::all();
        return response()->json([
            "respuesta"=>$direcciones
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
        $direccion = Direccion::create($request->post());
        return response()->json([
            "respuesta"=>$direccion
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Direccion $direccion)
    {
        return response()->json($direccion);
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
        $output = new ConsoleOutput();
        $output->writeln(var_export($id,true));

        $direccion=Direccion::find($id);
        if($direccion)
        {
            $direccion->fill($request->post())->save();
            return response()->json([
                "respuesta"=>$direccion
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
        $result=Direccion::destroy($id);
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

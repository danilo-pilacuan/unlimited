<?php

namespace App\Http\Controllers;

use App\Models\Orden;
use App\Models\RegistroCarrito;
use Illuminate\Http\Request;
use Symfony\Component\Console\Output\ConsoleOutput;

class OrdenController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $output = new ConsoleOutput();
        $output->writeln("indexxxx");

        //$productos=Producto::with('Categoria','caracteristicasProducto')->get()->makeHidden(['descripcionLarga']);

        $ordenes=Orden::with('RegistrosCarrito','RegistrosCarrito.Caracteristica','RegistrosCarrito.Producto','RegistrosCarrito.TamanioCaracteristica','RegistrosCarrito.TamanioProducto')->get();
        return response()->json([
            "respuesta"=>$ordenes
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
        // $request->validate([
        //     'nombres' => 'required',
        //     'apellidos' => 'required',
        //     'telefono' => 'required',
        //     'fechaNacimiento' => 'required',
        //     'email' => 'required|email|unique:users',
        //     'password' => 'required|confirmed',
        //     'tipoUsuario' => 'required'
        // ]);

        $output = new ConsoleOutput();

        date_default_timezone_set('America/Guayaquil');

        $orden=new Orden();
        $orden->fechaOrden=date('y-m-d h:i:s');
        $orden->estadoOrden=0;
        $orden->valorTotal=30.2;
        $orden->idUsuario=2;
        $orden->save();

        $output->writeln("orden");
        $output->writeln($orden);

        if($orden)
        {
            $requestData=json_decode($request->getContent());
            $itemsList=$requestData->itemsList;


            $output->writeln("itemsList");
            //$output->writeln(var_export($itemsList,true));

            foreach($itemsList as $itemCarrito)
            {
                $output->writeln("-------------------------------------------------------------------------");
                $output->writeln(var_export($itemCarrito,true));
                $itemCarritoObj=new RegistroCarrito();
                $itemCarritoObj->tipoRegistro=$itemCarrito->tipoRegistro;
                $itemCarritoObj->idCaracteristica=$itemCarrito->idCaracteristica;
                $itemCarritoObj->idTamanioCaracteristica =$itemCarrito->idTamanioCaracteristica;
                $itemCarritoObj->idTamanioProducto =$itemCarrito->idTamanioProducto;
                $itemCarritoObj->idProducto =$itemCarrito->idProducto;
                $itemCarritoObj->cantidad =$itemCarrito->cantidad;
                $itemCarritoObj->idOrden=$orden->id;
                $itemCarritoObj->save();
            }

        }

        // return response($orden, Response::HTTP_CREATED);


        // $user = new User();
        // $user->nombres = $request->nombres;
        // $user->apellidos = $request->apellidos;
        // $user->telefono = $request->telefono;
        // $user->fechaNacimiento = $request->fechaNacimiento;
        // $user->email = $request->email;
        // $user->password = Hash::make($request->password);
        // $user->tipoUsuario = $request->tipoUsuario;
        // $user->save();

        // $orden = Orden::create($request->post());
        return response()->json([
            "respuesta"=>$orden
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
        $output = new ConsoleOutput();
        $output->writeln("showww");
        $orden=Orden::find($id);
        return response()->json([
            "respuesta"=>$orden
        ]);
        //return response()->json($orden);
    }

    public function getOrdenByUserId($id)
    {
        $ordenes=Orden::where('idUsuario',$id)->get();

        return response()->json([
            "respuesta"=>$ordenes
        ]);

        // $producto=Producto::with('Categoria','caracteristicasProducto','tamaniosProducto','tamaniosProducto.Tamanio','caracteristicasProducto.TamaniosCaracteristica','caracteristicasProducto.TamaniosCaracteristica.Tamanio')->find($id);
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
        $orden=Orden::find($id);
        if($orden)
        {
            $orden->fill($request->post())->save();
            return response()->json([
                "respuesta"=>$orden
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
        $result=Orden::destroy($id);
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

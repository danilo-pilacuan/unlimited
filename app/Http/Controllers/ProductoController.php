<?php

namespace App\Http\Controllers;

use App\Models\CaracteristicaProducto;
use App\Models\Producto;
use App\Models\Categoria;
use App\Models\TamanioCaracteristica;
use App\Models\TamanioProducto;
use App\Models\Image;
use Illuminate\Http\Request;
use Symfony\Component\Console\Output\ConsoleOutput;

use Illuminate\Support\Facades\Validator;


class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if(request('categoria'))
        {
            $categoria=Categoria::where('nombre',request('categoria'))->first();
            if($categoria)
            {
                $productos=Producto::with('Categoria','caracteristicasProducto')->where('idCategoria', $categoria->id)->orderByDesc('id')->get()->makeHidden(['descripcionLarga']);
                return response()->json([
                    "respuesta"=>$productos
                ]);
            }
            else
            {
                return response()->json([
                    "respuesta"=>[]
                ]);
            }

        }
        elseif(request('buscar'))
        {

            $productos=Producto::with('Categoria','caracteristicasProducto')->where('nombre','LIKE', '%'.request('buscar').'%')->
            orWhere('descripcionCorta','LIKE', '%'.request('buscar').'%')->orderByDesc('id')->get()->makeHidden(['descripcionLarga']);
            return response()->json([
                "respuesta"=>$productos
            ]);

        }
        elseif(request('nuevos'))
        {

            $productos=Producto::with('Categoria','caracteristicasProducto')->where('nombre','LIKE', '%'.request('buscar').'%')->
            orWhere('descripcionCorta','LIKE', '%'.request('buscar').'%')->orderByDesc('updated_at')->get()->makeHidden(['descripcionLarga']);
            return response()->json([
                "respuesta"=>$productos
            ]);

        }
        elseif(request('populares'))
        {

            $productos=Producto::with('Categoria','caracteristicasProducto')->where('nombre','LIKE', '%'.request('buscar').'%')->
            orWhere('descripcionCorta','LIKE', '%'.request('buscar').'%')->orderByDesc('visitas')->get()->makeHidden(['descripcionLarga']);
            return response()->json([
                "respuesta"=>$productos
            ]);

        }
        else
        {
            $productos=Producto::with('Categoria','caracteristicasProducto')->orderByDesc('id')->get()->makeHidden(['descripcionLarga']);
            return response()->json([
                "respuesta"=>$productos
            ]);
        }

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
        $output = new ConsoleOutput();
        // $output->writeln($request);

        $producto = Producto::create($request->post());
        // $output->writeln('*****************');
        // $output->writeln($request->getContent());

        if($producto->tipo==1)
        {
            $productoAux=json_decode($request->getContent());
            foreach($productoAux->caracteristicas_producto as $caracteristicaAux)
            {
                $caracteristicaObj=[
                    "descripcion"=>$caracteristicaAux->descripcion,
                    "color"=>$caracteristicaAux->color,
                    "urlFoto"=>$caracteristicaAux->urlFoto,
                    "existencias"=>$caracteristicaAux->existencias,
                    "tipo"=>$caracteristicaAux->tipo,
                    "idProducto"=>$producto->id
                ];
                $caracteristica=CaracteristicaProducto::create($caracteristicaObj);
                // foreach($caracteristicaAux->tamaniosProducto as $tamanioAux)
                // {
                //     $tamanioObj=[
                //         'existencias' => $tamanioAux->existencias,
                //         'idTamanio' => $tamanioAux->idTamanio,
                //         'idCaracteristicaProducto' => $caracteristica->id,
                //     ];
                //     $tamanioProducto=TamanioCaracteristica::create($tamanioObj);
                // }
            }
        }
        elseif($producto->tipo==2)
        {
            // $output->writeln('aasas');
            // $output->writeln($request->getContent());
            $productoAux=json_decode($request->getContent());
            // $output->writeln('$productoAux -------------');
            // $output->writeln(var_export($productoAux,true));
            foreach($productoAux->caracteristicas_producto as $caracteristicaAux)
            {
                // $output->writeln('$caracteristicaAux');
                // $output->writeln(var_export($caracteristicaAux,true));
                // $output->writeln("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
                // $output->writeln($caracteristicaAux->descripcion);
                // $output->writeln($caracteristicaAux->color);
                // $output->writeln($caracteristicaAux->urlFoto);
                // $output->writeln($caracteristicaAux->existencias);
                // $output->writeln($caracteristicaAux->tipo);

                // $output->writeln();
                // $output->writeln();
                $caracteristicaObj=[
                    "descripcion"=>$caracteristicaAux->descripcion,
                    "color"=>$caracteristicaAux->color,
                    "urlFoto"=>$caracteristicaAux->urlFoto,
                    "existencias"=>$caracteristicaAux->existencias,
                    "tipo"=>$caracteristicaAux->tipo,
                    "idProducto"=>$producto->id
                ];
                $caracteristica=CaracteristicaProducto::create($caracteristicaObj);
                foreach($caracteristicaAux->tamanios_caracteristica as $tamanioAux)
                {
                    $tamanioCarObj=[
                        'existencias' => $tamanioAux->existencias,
                        'idTamanio' => $tamanioAux->idTamanio,
                        'idCaracteristicaProducto' => $caracteristica->id,
                    ];
                    $tamanioCaracteristica=TamanioCaracteristica::create($tamanioCarObj);
                }
            }

        }
        elseif($producto->tipo==3)
        {
            $productoAux=json_decode($request->getContent());
            foreach($productoAux->tamanios_producto as $tamanioAux)
            {
                $tamanioProdObj=[
                    'existencias' => $tamanioAux->existencias,
                    'idTamanio' => $tamanioAux->idTamanio,
                    'idProducto' => $producto->id
                ];
                $tamanioProducto=TamanioProducto::create($tamanioProdObj);
            }
        }
        // return response()->json([
        //     "respuesta"=>$producto
        // ]);

        return response()->json([
            "respuesta"=>"ok"
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
        $producto=Producto::with('Categoria','caracteristicasProducto','tamaniosProducto','tamaniosProducto.Tamanio','caracteristicasProducto.TamaniosCaracteristica','caracteristicasProducto.TamaniosCaracteristica.Tamanio')->find($id);
        // if(count($producto->caracteristicas_producto)>0)
        // {
        //     for($i=0;$i<count($producto->caracteristicas_producto);$i++)
        //     {
        //         $producto->caracteristicas_producto[$i]
        //     }
        // }
        return response()->json([
            "respuesta"=>$producto
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
    public function update(Request $request, $id)
    {
        // $output = new ConsoleOutput();
        // $output->writeln(var_export($producto,true));
        // $producto->fill($request->post())->save();
        // return response()->json([
        //     "respuesta"=>$producto
        // ]);

        $producto=Producto::find($id);
        if($producto)
        {
            $producto->fill($request->post())->save();

            ////----------------------------------------------------------------------------------------------------------
            ////----------------------------------------------------------------------------------------------------------
            $producto=Producto::find($id);
            if($producto->tipo==1)
            {
                $productoAux=json_decode($request->getContent());
                foreach($productoAux->caracteristicas_producto as $caracteristicaAux)
                {
                    $caracteristicaObj=[
                        "id"=>$caracteristicaAux->id,
                        "descripcion"=>$caracteristicaAux->descripcion,
                        "color"=>$caracteristicaAux->color,
                        "urlFoto"=>$caracteristicaAux->urlFoto,
                        "existencias"=>$caracteristicaAux->existencias,
                        "tipo"=>$caracteristicaAux->tipo,
                        "idProducto"=>$producto->id
                    ];
                    $caracteristica=CaracteristicaProducto::find($caracteristicaAux->id);
                    $caracteristica->fill($caracteristicaObj)->save();
                }
            }
            elseif($producto->tipo==2)
            {
                $productoAux=json_decode($request->getContent());

                foreach($productoAux->caracteristicas_producto as $caracteristicaAux)
                {

                    $caracteristicaObj=[
                        "id"=>$caracteristicaAux->id,
                        "descripcion"=>$caracteristicaAux->descripcion,
                        "color"=>$caracteristicaAux->color,
                        "urlFoto"=>$caracteristicaAux->urlFoto,
                        "existencias"=>$caracteristicaAux->existencias,
                        "tipo"=>$caracteristicaAux->tipo,
                        "idProducto"=>$producto->id
                    ];
                    //$caracteristica=CaracteristicaProducto::create($caracteristicaObj);
                    $caracteristica=CaracteristicaProducto::find($caracteristicaAux->id);
                    $caracteristica->fill($caracteristicaObj)->save();

                    foreach($caracteristicaAux->tamanios_caracteristica as $tamanioAux)
                    {
                        $tamanioCarObj=[
                            'id' => $tamanioAux->id,
                            'existencias' => $tamanioAux->existencias,
                            'idTamanio' => $tamanioAux->idTamanio,
                            'idCaracteristicaProducto' => $caracteristica->id,
                        ];
                        //$tamanioCaracteristica=TamanioCaracteristica::create($tamanioCarObj);
                        $tamanioCaracteristica=TamanioCaracteristica::find($tamanioAux->id);
                        $tamanioCaracteristica->fill($tamanioCarObj)->save();
                    }
                }

            }
            elseif($producto->tipo==3)
            {
                $productoAux=json_decode($request->getContent());
                foreach($productoAux->tamanios_producto as $tamanioAux)
                {
                    $tamanioProdObj=[
                        'id' => $tamanioAux->id,
                        'existencias' => $tamanioAux->existencias,
                        'idTamanio' => $tamanioAux->idTamanio,
                        'idProducto' => $producto->id
                    ];
                    //$tamanioProducto=tamanioProducto::create($tamanioProdObj);
                    $tamanioProducto=tamanioProducto::find($tamanioAux->id);
                    $tamanioProducto->fill($tamanioProdObj)->save();
                }
            }

            ////----------------------------------------------------------------------------------------------------------
            ////----------------------------------------------------------------------------------------------------------

            return response()->json([
                "respuesta"=>$producto
            ]);
        }
        else
        {
            return response()->json([
                "resultado"=>"fail"
            ]);
        }


    }


    public function updateVisitas(Request $request, $id)
    {

        $producto=Producto::find($id);
        if($producto)
        {
            $producto->visitas=$producto->visitas+1;
            $producto->save();
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

    // public function updateStock(Request $request, $id)
    // {
    //     $producto=Producto::find($id);
    // }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Producto $producto)
    {
        $producto->delete();
        return response()->json([
            "resultado"=>"ok"
        ]);
    }

    public function upload(Request $request)
    {
        $output = new ConsoleOutput();

        $validator=Validator::make($request->all(),[
            'file'=>'required|mimes:jpeg,gif,png|max:4096'
        ]);

        if($validator->fails())
        {

            $output->writeln("Validator failed");

            return response()->json([
                "resultado"=>"fail"
            ]);
        }
        else
        {
            $output->writeln("Validator ok");
        }
        // else
        // {
        //     return response()->json([
        //         "resultado"=>"file ok"
        //     ]);
        // }

        if($file=$request->file('file')){
            $output->writeln("File ok");
            $image_path = $request->file('file')->store('images', 'public');
            //$path=$file->store('/public/imgs/testuploads');
            $output->writeln($image_path);
            //$name=$file->getClientOriginalName();

            $imageObj=[
                'url'=>'storage/'.$image_path,
            ];
            $image=Image::create($imageObj);

            return response()->json([
                "respuesta"=>$image
            ]);

            // $data=new Image();
            // $data->name=$name;
            // $data->path=$path;
            // $data->save();
            // return response()->json([
            //     "resultado"=>"save ok"
            // ]);
        }

    }
}

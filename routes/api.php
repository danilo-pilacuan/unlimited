<?php

use App\Http\Controllers\AnuncioController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CaracteristicaProductoController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\OrdenController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\RegistroCarritoController;
use App\Http\Controllers\TamanioCaracteristicaController;
use App\Http\Controllers\TamanioController;
use App\Http\Controllers\TamanioProductoController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DireccionController;
use Illuminate\Auth\Events\Login;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("ordenes/user/{id}",[OrdenController::class,'getOrdenByUserId']);
Route::put("productos/visitas/{id}",[ProductoController::class,'updateVisitas']);

Route::get("registrocarrito/orden/{id}",[RegistroCarritoController::class,'getRegistrosByOrdenId']);

Route::resource('categorias',CategoriaController::class)->only(['index','store','update','show','destroy']);

Route::resource('anuncios',AnuncioController::class)->only(['index','store','update','show','destroy']);

Route::resource('caracteristicasproducto',CaracteristicaProductoController::class)->only(['index','store','update','show','destroy']);

Route::resource('ordenes',OrdenController::class)->only(['index','store','update','show','destroy']);

Route::resource('productos',ProductoController::class)->only(['index','store','update','show','destroy']);

Route::resource('tamanios',TamanioController::class)->only(['index','store','update','show','destroy']);

Route::resource('usuarios',UserController::class)->only(['index','store','update','show','destroy']);
Route::resource('direcciones',DireccionController::class)->only(['index','store','update','show','destroy']);

Route::resource('tamanioscaracteristicas',TamanioCaracteristicaController::class)->only(['index','store','update','show','destroy']);

Route::resource('tamaniosproductos',TamanioProductoController::class)->only(['index','store','update','show','destroy']);
Route::resource('registrocarrito',RegistroCarritoController::class)->only(['index','store','update','show','destroy']);

Route::post('login',[AuthController::class,'login']);

Route::post('register',[AuthController::class,'register']);

Route::post("uploadImage",[ProductoController::class,'upload']);





// Route::group(['middleware'=>['auth:sanctum']],function(){
//     Route::get('user-profile',[AuthController::class,'userProfile']);
// });

Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::get('user-profile', [AuthController::class, 'userProfile']);
    Route::post('logout', [AuthController::class, 'logout']);
});

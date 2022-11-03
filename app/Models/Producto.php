<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;



    protected $fillable = ['codigo','nombre','precio','descripcionCorta','descripcionLarga','urlsFotos','existencias','estado','visitas','tipo','descuento','idCategoria'];

    public function categoria(){
        return $this->belongsTo(Categoria::class,'idCategoria');
    }

    public function caracteristicasProducto(){
        return $this->hasMany(CaracteristicaProducto::class,'idProducto');
    }

    public function tamaniosProducto(){
        return $this->hasMany(TamanioProducto::class,'idProducto');
    }


}

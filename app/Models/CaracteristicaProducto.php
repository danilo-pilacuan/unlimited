<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaracteristicaProducto extends Model
{
    use HasFactory;

    protected $fillable = ['descripcion','color','urlFoto','existencias','tipo','idProducto'];

    public function producto()
    {
        return $this->belongsTo(Producto::class,'idProducto');
    }

    public function TamaniosCaracteristica()
    {
        return $this->hasMany(TamanioCaracteristica::class,'idCaracteristicaProducto');
    }

    // $table->string('descripción');
    // $table->text('urlFoto');
    // $table->integer('existencias');
    // $table->integer('tipo');
    // $table->foreignId('idProducto')

}

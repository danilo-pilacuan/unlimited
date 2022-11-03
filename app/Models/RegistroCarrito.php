<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegistroCarrito extends Model
{
    use HasFactory;

    protected $fillable = ['idProducto','tipoRegistro','idCaracteristica','idTamanioCaracteristica','idTamanioProducto','idOrden','cantidad'];

    // public function Caracteristica()
    // {
    //     return $this->hasOne(CaracteristicaProducto::class,'id');
    // }

    public function Caracteristica()
    {
        return $this->belongsTo(CaracteristicaProducto::class,'idCaracteristica');
    }

    public function Producto()
    {
        return $this->belongsTo(Producto::class,'idCaracteristica');
    }

    public function TamanioCaracteristica()
    {
        return $this->belongsTo(TamanioCaracteristica::class,'idCaracteristica');
    }

    public function TamanioProducto()
    {
        return $this->belongsTo(TamanioProducto::class,'idCaracteristica');
    }


}

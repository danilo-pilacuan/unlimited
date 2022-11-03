<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TamanioCaracteristica extends Model
{
    use HasFactory;

    protected $fillable = ['existencias','idTamanio','idCaracteristicaProducto'];

    public function Tamanio()
    {
        return $this->belongsTo(Tamanio::class,'idTamanio');
    }

    public function CaracteristicaProducto()
    {
        return $this->belongsTo(CaracteristicaProducto::class,'idCaracteristicaProducto');
    }

    //$table->integer('existencias');
    // $table->foreignId('idTamanio')
    //     ->nullable()
    //     ->constrained('tamanios')
    //     ->cascadeOnUpdate()
    //     ->nullOnDelete();
    // $table->foreignId('idCaracteristicaProducto')

}

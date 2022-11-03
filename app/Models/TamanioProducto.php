<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TamanioProducto extends Model
{
    use HasFactory;

    protected $fillable = ['existencias','idTamanio','idProducto'];

    public function Tamanio()
    {
        return $this->belongsTo(Tamanio::class,'idTamanio');
    }

    public function Producto()
    {
        return $this->belongsTo(Producto::class,'idProducto');
    }


    // $table->integer('existencias');
    // $table->foreignId('idTamanio')
    //     ->nullable()
    //     ->constrained('tamanios')
    //     ->cascadeOnUpdate()
    //     ->nullOnDelete();
    // $table->foreignId('idProducto')
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orden extends Model
{
    use HasFactory;

    protected $fillable = ['fechaOrden','estadoOrden','valorTotal','idUsuario'];

    public function RegistrosCarrito()
    {
        return $this->hasMany(RegistroCarrito::class,'idOrden');
    }

    public function User()
    {
        return $this->belongsTo(User::class,'idUsuario');
    }

    // $table->dateTime('fechaOrden');
    // $table->integer('estadoOrden');
    // $table->float('valorTotal');
    // $table->foreignId('idUsuario')

}

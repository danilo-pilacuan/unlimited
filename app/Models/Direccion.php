<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Direccion extends Model
{
    use HasFactory;
    protected $fillable = ['callePrincipal','calleSecundaria','numeroCasa','telefono','ciudad','idUsuario'];

    public function Usuario()
    {
        return $this->belongsTo(Usuario::class,'idUsuario');
    }
}

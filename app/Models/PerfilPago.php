<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PerfilPago extends Model
{
    use HasFactory;

    protected $fillable = ['token','idUsuario'];

    public function User()
    {
        return $this->belongsTo(User::class,'idUsuario');
    }

    // $table->string('token');
    // $table->foreignId('idUsuario')

}

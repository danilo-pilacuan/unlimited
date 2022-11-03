<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tamanio extends Model
{
    use HasFactory;

    protected $fillable = ['descripcion'];

    public function TamaniosCaracteristica()
    {
        return $this->hasMany(TamanioCaracteristica::class,'id');
    }

    public function TamaniosProducto()
    {
        return $this->hasMany(TamanioProducto::class,'id');
    }

    // $table->string('descripcion');


}

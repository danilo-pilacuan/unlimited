<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Categoria extends Model
{
    use HasFactory;

    protected $fillable = ['nombre','descripcion','urlFotoCategoria','estadoCategoria','descuentoCategoria'];

    public function productos()
    {
        return $this->hasMany(Producto::class,'id');
    }

    // $table->string('nombre');
    //         $table->text('descripcion');
    //         $table->text('urlFotoCategoria');
    //         $table->integer('estadoCategoria');
    //         $table->float('descuentoCategoria');
}

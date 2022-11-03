<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anuncio extends Model
{
    use HasFactory;

    protected $fillable = ['descripcionCorta','descripcionLarga','urlFoto','urlAccion','estado'];

    // $table->string('descripciónCorta');
    // $table->text('descripcionLarga');
    // $table->text('urlFoto');
    // $table->text('urlAcción');
    // $table->integer('estado');
}

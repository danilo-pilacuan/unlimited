<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string('codigo')->unique();;
            $table->string('nombre');
            $table->float('precio');
            $table->text('descripcionCorta');
            $table->longText('descripcionLarga');
            $table->text('urlsFotos');
            $table->integer('existencias');
            $table->integer('estado');
            $table->integer('visitas');
            $table->integer('tipo');
            $table->float('descuento');
            $table->foreignId('idCategoria')
                  ->nullable()
                  ->constrained('categorias')
                  ->cascadeOnUpdate()
                  ->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('productos');
    }
};

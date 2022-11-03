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
        Schema::create('caracteristica_productos', function (Blueprint $table) {
            $table->id();
            $table->string('descripcion');
            $table->string('color');
            $table->text('urlFoto');
            $table->integer('existencias');
            $table->integer('tipo');
            $table->foreignId('idProducto')
                  ->nullable()
                  ->constrained('productos')
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
        Schema::dropIfExists('caracteristica_producto');
    }
};

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
        Schema::create('tamanio_productos', function (Blueprint $table) {
            $table->id();
            $table->integer('existencias');
            $table->foreignId('idTamanio')
                  ->nullable()
                  ->constrained('tamanios')
                  ->cascadeOnUpdate()
                  ->nullOnDelete();
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
        Schema::dropIfExists('tamanios_producto');
    }
};

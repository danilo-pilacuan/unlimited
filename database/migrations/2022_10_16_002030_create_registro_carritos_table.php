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
        Schema::create('registro_carritos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idProducto')
                  ->nullable()
                  ->constrained('productos')
                  ->cascadeOnUpdate()
                  ->nullOnDelete();
            $table->integer('tipoRegistro');
            $table->foreignId('idCaracteristica')
                  ->nullable()
                  ->constrained('caracteristica_productos')
                  ->cascadeOnUpdate()
                  ->nullOnDelete();
            $table->foreignId('idTamanioCaracteristica')
                  ->nullable()
                  ->constrained('tamanio_caracteristicas')
                  ->cascadeOnUpdate()
                  ->nullOnDelete();
            $table->foreignId('idTamanioProducto')
                  ->nullable()
                  ->constrained('tamanio_productos')
                  ->cascadeOnUpdate()
                  ->nullOnDelete();
            $table->foreignId('idOrden')
                  ->nullable()
                  ->constrained('ordens')
                  ->cascadeOnUpdate()
                  ->nullOnDelete();
            $table->integer('cantidad');

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
        Schema::dropIfExists('registros_carrito');
    }
};

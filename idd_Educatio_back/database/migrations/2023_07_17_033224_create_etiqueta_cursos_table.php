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
        Schema::create('etiqueta_cursos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_curso')->nullable();
            $table->foreign('id_curso')->references('id')->on('recursos');
            $table->unsignedBigInteger('id_etiqueta')->nullable();
            $table->foreign('id_etiqueta')->references('id')->on('etiquetas');
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
        Schema::dropIfExists('etiqueta_cursos');
    }
};

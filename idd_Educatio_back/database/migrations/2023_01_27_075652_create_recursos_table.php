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
        Schema::create('recursos', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('Descripcion');
            $table->string('tipo');
            $table->string('precio');
            $table->unsignedBigInteger('id_Usuario')->nullable();
            $table->unsignedBigInteger('id_asociasion')->nullable();
            $table->unsignedBigInteger('id_Estado')->nullable();
            $table->unsignedBigInteger('tipyRec')->nullable();

            $table->foreign('id_Usuario')->references('id')->on('users');
            $table->foreign('id_asociasion')->references('id')->on('asociasiones');
            $table->foreign('id_Estado')->references('id')->on('estados');
            $table->foreign('tipyRec')->references('id')->on('tiporecursos');        
            $table->string('vistaprevia');
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
        Schema::dropIfExists('recursos');
    }
};

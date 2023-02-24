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
        Schema::create('rol__privilegios', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_rol')->nullable();
            $table->unsignedBigInteger('id_privilegio')->nullable();

            $table->foreign('id_rol')->references('id')->on('rols');
            $table->foreign('id_privilegio')->references('id')->on('privilegios');
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
        Schema::dropIfExists('rol__privilegios');
    }
};

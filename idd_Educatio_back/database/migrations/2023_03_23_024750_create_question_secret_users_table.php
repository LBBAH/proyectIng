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
        Schema::create('question_secret_users', function (Blueprint $table) {
            $table->id();            

            $table->unsignedBigInteger('id_user')->nullable();
            $table->unsignedBigInteger('id_questionSecret')->nullable();

            $table->foreign('id_user')->references('id')->on('users');
            $table->foreign('id_questionSecret')->references('id')->on('queston_secrets');

            $table->string('answer'); 
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
        Schema::dropIfExists('question_secret_users');
    }
};

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionSecretUser extends Model
{
    public $timestamps = false;
    protected $fillable = ['id_user','id_questionSecret','answer'];
}

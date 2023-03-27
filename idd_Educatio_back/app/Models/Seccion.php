<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seccion extends Model
{
    public $timestamps = false;
    protected $fillable = ['nombre', 'descripcion', 'plataforma', 'url', 'id_curso'];
}

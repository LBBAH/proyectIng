<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recurso extends Model
{
    public $timestamps = false;
    protected $fillable = ['name', 'Descripcion', 'tipyRec', 'vistaprevia'];
}

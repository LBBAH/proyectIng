<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class rol_Privilegio extends Model
{
    public $timestamps = false;
    protected $fillable = ['id_rol', 'id_privilegio'];
}

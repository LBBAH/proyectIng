<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class backupsBD extends Model
{
    public $timestamps = false;
    protected $fillable = ['name','url'];
}

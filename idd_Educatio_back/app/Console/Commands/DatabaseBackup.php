<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Contracts\Cache\Store;
use Illuminate\Support\Facades\Storage;

class DatabaseBackup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:backup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $path = storage_path('/app/backup/');
        $filename = 'backup_'.strtotime(now()).".sql";
        $command = "mysqlduump --user=".env('DB_USERNAME')."--password=".env('DB_PASSWORD')."--host=".env('DB_HOST')."".env('DB:DATABASE').">"."backup/".$filename;
        exec($command);    

        return response()->json($filename, 200);
    }
}
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
        
        $filename = "backup_.sql";
        $command = "/opt/lampp/bin/mysqldump --user=".env('DB_USERNAME')." --password=".env('DB_PASSWORD')." --host=".env('DB_HOST')." --databases idd_proyect"." > "."public/backup/".$filename;
        
        $returnVar = NULL;
        $output  = NULL;
  
        exec($command, $output, $returnVar);
        return response()->json($filename);        
    
    }
}

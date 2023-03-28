import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/user';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import { DataBase } from 'src/app/services/database';

@Component({
  selector: 'app-base-de-datos',
  templateUrl: './base-de-datos.component.html',
  styleUrls: ['./base-de-datos.component.css']
})
export class BaseDeDatosComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name','url'];
  dataBD:any;
  dataURl:any;
  redirectBD:any;
  dataSource:any;

  constructor(     
    private serviceAuth:UsersService,
    private httpClient: HttpClient ) { 
      
  }
  ngOnInit(): void {
    this.serviceAuth.bdData().subscribe(res=>{
      console.log(res)
      this.dataBD=res
      this.dataSource = new MatTableDataSource<DataBase>(this.dataBD); 
    })
  }

  respaldo(){    

    this.serviceAuth.handle().subscribe(res=>{      
      this.redirectBD=res   
      console.log(this.redirectBD)      
    });
    this.serviceAuth.bdRespose({name:this.redirectBD, url:'http://127.0.0.1:8000/backup/backup_.sql'}).subscribe(res=>{
      console.log(res)    
    })
    this.serviceAuth.bdData().subscribe(res=>{
      console.log(res)
      this.dataBD=res
      this.dataSource = new MatTableDataSource<DataBase>(this.dataBD); 
    })
    
  }

  refrescar(){
    this.serviceAuth.bdData().subscribe(res=>{
      console.log(res)
      this.dataBD=res
      this.dataSource = new MatTableDataSource<DataBase>(this.dataBD); 
    })
  }

}

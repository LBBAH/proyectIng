import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/user';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-base-de-datos',
  templateUrl: './base-de-datos.component.html',
  styleUrls: ['./base-de-datos.component.css']
})
export class BaseDeDatosComponent implements OnInit{

  dataBD:any;
  dataURl:any;

  redirectBD:any;
  constructor(     
    private serviceAuth:UsersService,
    private httpClient: HttpClient ) {     
  }
  ngOnInit(): void {
    this.serviceAuth.bdData().subscribe(res=>{
      console.log(res)
      this.redirectBD=res
    })
  }

  respaldo(){    

    this.serviceAuth.handle().subscribe(res=>{      
      this.dataBD=res
    });
    this.serviceAuth.bdRespose({name:this.dataBD, url:'http://127.0.0.1:8000/backup/'+this.dataBD}).subscribe(res=>{
      console.log(res)    
    })
    
  }

  refrescar(){

  }

}

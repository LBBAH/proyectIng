import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IddServicesService } from 'src/app/service/idd-services.service';
import * as AOS from 'aos'

@Component({
  selector: 'app-recurso',
  templateUrl: './recurso.component.html',
  styleUrls: ['./recurso.component.css']
})
export class RecursoComponent implements OnInit {

  id:any;
  recurso:any;

  constructor(
    private activeRouter:ActivatedRoute,    
    private router: Router,
    private dataService:IddServicesService
  ) { 
    
  }

  getrecId(){
    this.id=this.activeRouter.snapshot.paramMap.get('id');    
    console.log(this.id);

    this.dataService.findBandId(this.id).subscribe(reply=>{        
      let array = Object.entries(reply);        
        if(array[0][0]=="warning"){
          this.router.navigate(['400']);
        }else{
          console.log(reply)
          this.recurso=reply;
        }    
      }
    )
  }

  ngOnInit(): void {
    this.getrecId();
    AOS.init();
  }
  verCursosId(id:any){

  }

}

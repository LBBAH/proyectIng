import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IddServicesService } from 'src/app/service/idd-services.service';
import * as AOS from 'aos'
import { Router } from '@angular/router';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent implements OnInit{
  typeRecurs:any;  

  constructor(
    private datatypeR:IddServicesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getdatatypeR();
    AOS.init();
  }

  getdatatypeR(){
    this.datatypeR.getTypeRecurs().subscribe(reply =>{
      console.log(reply)
      this.typeRecurs=reply;
    })
  }
  verCursos(id:any){
    this.router.navigate(['recurso/', id]);    
  }

}

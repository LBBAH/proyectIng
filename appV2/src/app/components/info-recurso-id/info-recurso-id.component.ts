import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IddServicesService } from 'src/app/service/idd-services.service';
import { LocalStorageServiceService } from 'src/app/service/local-storage-service.service';
import * as AOS from 'aos'

@Component({
  selector: 'app-info-recurso-id',
  templateUrl: './info-recurso-id.component.html',
  styleUrls: ['./info-recurso-id.component.css']
  ,
  providers: [LocalStorageServiceService]
})
export class InfoRecursoIdComponent implements OnInit{
  id:any
  editCurso:any;
  objetivos:any;
  seccion:any;
  recurso:any;
  titulo:any;
  valoresCampo: any[] = [];
  
  constructor(
    private activeRouter:ActivatedRoute,        
    private dataService: IddServicesService,
    private router:Router,
    private LocalStorageServiceService: LocalStorageServiceService
  ) { 
    
  }
  
  ngOnInit(): void {
    AOS.init()
    this.id=this.activeRouter.snapshot.paramMap.get('id');  
    this.dataService.getrecurosEditId({id:this.id}).subscribe(res=>{
      this.editCurso=res
      console.log(res)
    })
  
    this.dataService.showObejtivoCursoId({id_curso:this.id}).subscribe(res=>{
      console.log(res)
      this.objetivos=res
    })
    this.dataService.showSeccionCursoId({id_curso:this.id}).subscribe(res=>{
      console.log(res)
      this.seccion=res
    })
    this.getDataLS()
  }

  getDataLS(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = { headers: headers };

    const data = this.LocalStorageServiceService.getItem('myData');
    this.titulo = data.title
    console.log(data.title);
    this.dataService.getDataML(this.titulo,options).subscribe(
      (response) => {
        console.log(response)
        this.valoresCampo = response;
        this.dataService.obtenerDatos(this.valoresCampo).subscribe((res)=>{
          console.log(res)
          this.recurso=res;
        })
        console.log(this.valoresCampo)
      }
    )
        
  }

  verCursosId(id:any){    
    this.router.navigate(['infoRecurso/', id]); 
  }

}

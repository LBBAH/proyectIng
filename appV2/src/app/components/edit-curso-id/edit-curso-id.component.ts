import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IddServicesService } from 'src/app/service/idd-services.service';
@Component({
  selector: 'app-edit-curso-id',
  templateUrl: './edit-curso-id.component.html',
  styleUrls: ['./edit-curso-id.component.css']
})
export class EditCursoIdComponent implements OnInit{

  id:any
  editCurso:any;
  objetivos:any;
  seccion:any;

  constructor(
    private activeRouter:ActivatedRoute,        
    private dataService: IddServicesService
  ) { 
    
  }


  ngOnInit(): void {
    this.id=this.activeRouter.snapshot.paramMap.get('id')  
    console.log(this.id)
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
  }

}

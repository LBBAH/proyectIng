import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IddServicesService } from 'src/app/service/idd-services.service';

@Component({
  selector: 'app-new-curso',
  templateUrl: './new-curso.component.html',
  styleUrls: ['./new-curso.component.css']
})
export class NewCursoComponent implements OnInit{

  formNewCurso: FormGroup;
  asociacion:any;
  typerECURSO:any

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:
    {
      id: number,
      
    },
    private matDialogRef: MatDialogRef<NewCursoComponent>,
    public formulario:FormBuilder,
    private dataService: IddServicesService,
    private router:Router
  ){
    this.formNewCurso=this.formulario.group({      
      name:['', [Validators.required]],
      Descripcion:['', [Validators.required]],
      tipo:['', [Validators.required]],
      precio:['', [Validators.required]],
      id_Usuario:['', [Validators.required]],
      id_asociasion:['', [Validators.required]],
      tipyRec:['', [Validators.required]],
    })
  }
  
  ngOnInit(): void {
    this.dataService.getAsociasiones().subscribe(res=>{
      console.log(res)
      this.asociacion=res
    })

    this.dataService.getTypeRecursos().subscribe(res=>{
      this.typerECURSO=res
    })
  }

  closeDialog(){

  }
  registraRol(){
    this.formNewCurso.get('id_Usuario')?.setValue(this.data.id)


    console.log(this.formNewCurso.value)
  }
}

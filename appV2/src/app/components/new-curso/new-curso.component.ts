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
      name:['', [Validators.required,Validators.maxLength(20), Validators.pattern(/^[a-z\s\u00E0-\u00FC\u00f1]*$/i),]],
      Descripcion:['', [Validators.required, Validators.maxLength(160),Validators.pattern(/^[a-z\s\u00E0-\u00FC\u00f1]*$/i)]],
      tipo:['', [Validators.required]],
      precio:['', [Validators.required, Validators.pattern(/^[0-9]+$/i)]],
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
    if(this.formNewCurso.valid){
      this.formNewCurso.get('id_Usuario')?.setValue(this.data.id)


    console.log(this.formNewCurso.value)
    }
    alert("llene todos los campos correctamente")
    
  }


  get name(){ return this.formNewCurso.get('name');}
  get Descripcion(){ return this.formNewCurso.get('Descripcion');}
  get tipo(){ return this.formNewCurso.get('tipo');}
  get precio(){ return this.formNewCurso.get('precio');}
  get id_Usuario(){ return this.formNewCurso.get('id_Usuario');}
  get id_asociasion(){ return this.formNewCurso.get('id_asociasion');}
  get tipyRec(){ return this.formNewCurso.get('tipyRec0');}
}

//checar la funcion en el componente de roles para abrir el matdialog

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  formRol: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<DialogComponent>,
    public formulario:FormBuilder,
    private dataService: UsersService
  ){
    this.formRol=this.formulario.group({
      rol:['', [Validators.required]],
      descripcion:['', [Validators.required]]
    })
  }

  //para cerrar el matdialog
  closeDialog(){
    this.matDialogRef.close()
  }
  RegistrarRol(){

  }
}

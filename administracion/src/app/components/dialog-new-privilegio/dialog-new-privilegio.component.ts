//checar la funcion en el componente de roles para abrir el matdialog

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
Router


@Component({
  selector: 'app-dialog-new-privilegio',
  templateUrl: './dialog-new-privilegio.component.html',
  styleUrls: ['./dialog-new-privilegio.component.css']
})
export class DialogNewPrivilegioComponent {

  formPriv: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<DialogNewPrivilegioComponent>,
    public formulario:FormBuilder,
    private dataService: UsersService,
    private router:Router
  ){
    this.formPriv=this.formulario.group({      
      description:['', [Validators.required]]
    })
  }

  //para cerrar el matdialog
  closeDialog(){
    this.matDialogRef.close()
  }
  RegistrarPriv(){
    
  }

  registraRol(){
    this.dataService.addPrivilegio(this.formPriv.value).subscribe(res=>{
      let arr = Object.entries(res);
      if(arr[0][0] == "error"){
          alert(arr[0][1])
        }

        if(arr[0][0] == "success"){
          alert(arr[0][1])          
        }
    })
  }
}

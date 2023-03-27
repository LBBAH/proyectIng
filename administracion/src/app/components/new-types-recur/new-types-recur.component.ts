import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-types-recur',
  templateUrl: './new-types-recur.component.html',
  styleUrls: ['./new-types-recur.component.css']
})
export class NewTypesRecurComponent {

  formTypeRec:FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<NewTypesRecurComponent>,
    public formulario:FormBuilder,
    private dataService: UsersService
  ){
    this.formTypeRec=this.formulario.group({
      name:['', [Validators.required]],
      description:['', [Validators.required]]
    })
  }
 

  closeDialog(){

  }
  RegistrarRol(){
    this.dataService.addTypeRecurso(this.formTypeRec.value).subscribe(res=>{
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

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IddServicesService } from 'src/app/service/idd-services.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  formEditUser: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:
    {
      id: number,
      nombre:string,
      nameU:string,
      telefono:string,
      correo:string     
    },
    private matDialogRef: MatDialogRef<EditUserComponent>,
    private router:Router,
    private http:HttpClient,
    private matDialog: MatDialog,
    private dataService:IddServicesService,
    public formulario:FormBuilder,
  ){
    this.formEditUser=this.formulario.group({
      name:['', [Validators.required]],
      nameUser:['', [Validators.required]],
      phone:['', [Validators.required]],
      email:['', [Validators.required]],      
    });
  }
  ngOnInit(): void {
    this.formEditUser.setValue({
      name: this.data.nombre,
      nameUser: this.data.nameU,
      phone: this.data.telefono,
      email: this.data.correo,
      typeUser: this.data.correo,
    });
  }
  closeDialog(){
    this.matDialogRef.close();
  }
  UpdateUserz(){
    this.dataService.UpdateUserz(this.data.id, this.formEditUser.value).subscribe(res=>{
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

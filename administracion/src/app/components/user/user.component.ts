
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  formEditUser: FormGroup;
  typeRols:any; 
  

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:
    {
      id: number,
      nombre:string,
      nameU:string,
      telefono:string,
      correo:string     
    },
    private matDialogRef: MatDialogRef<UserComponent>,
    public formulario:FormBuilder,
    private dataService: UsersService
  ){
    
    this.formEditUser=this.formulario.group({
      name:['', [Validators.required]],
      nameUser:['', [Validators.required]],
      phone:['', [Validators.required]],
      email:['', [Validators.required]],
      typeUser:['', [Validators.required]]
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
    this.dataService.getRols().subscribe(res=>{
      this.typeRols=res;
    })
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

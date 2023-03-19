import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.css']
})
export class DialogEditUserComponent implements OnInit{
  formEditRol: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:
    {
      id: number,
      rol:string,
      Description:string,
      message:string      
    },
    private matDialogRef: MatDialogRef<DialogEditUserComponent>,
    public formulario:FormBuilder,
    private dataService: UsersService
  ){
    
    this.formEditRol=this.formulario.group({
      rol:['', [Validators.required]],
      Description:['', [Validators.required]],      
    });
    
  }

  ngOnInit(): void {
    this.formEditRol.setValue({
      rol: this.data.rol,
      Description: this.data.Description,      
    });    
  }

  closeDialog(){
    this.matDialogRef.close();
  }

  UpdateRol(){
    this.dataService.UpdateRol(this.data.id, this.formEditRol.value).subscribe(res=>{
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

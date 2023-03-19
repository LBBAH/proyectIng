import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dialog-new-user',
  templateUrl: './dialog-new-user.component.html',
  styleUrls: ['./dialog-new-user.component.css']
})
export class DialogNewUserComponent implements OnInit{
  formUsers: FormGroup;
  typeRols:any;  

  constructor(
   
    private userData:UsersService,
    private router:Router,
    public formulario:FormBuilder,    
    private matDialogRef: MatDialogRef<DialogNewUserComponent>
  ) { 
    
    this.formUsers=this.formulario.group({      
      name:['', [Validators.required]],
      nameUser:['', [Validators.required]],
      phone:['', [Validators.required]],
      email:['', [Validators.required]],
      password:['', [Validators.required]],
      typeUser:['', [Validators.required]],
    })
  }
  
  ngOnInit(): void {
    this.userData.getRols().subscribe(res=>{
      this.typeRols=res;
    })
  }
  
  closeDialog(){
    this.matDialogRef.close()
  }

  RegistrarUser(){
    this.userData.adduser(this.formUsers.value).subscribe(res=>{
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

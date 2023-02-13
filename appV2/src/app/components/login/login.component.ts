import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IddServicesService } from 'src/app/service/idd-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;

  formlogin: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  

  constructor(public formulario:FormBuilder, private dataService:IddServicesService, private router: Router) { 
    this.formlogin=this.formulario.group({      
      email:['' , [Validators.required, Validators.pattern(this.emailPattern)]],
      password:['', [Validators.required]]      
    })
  }
  

  ngOnInit(): void {
    this.getdata()
  }

  getdata():any{
    this.dataService.getData().subscribe(res => {
      console.log(res)
    })
  }

  login():any{
    
  }

  loginUser():any{
    
    if(this.formlogin.valid){
      this.dataService.login(this.formlogin.value).subscribe((res:any) => {
        localStorage.setItem('user',JSON.stringify(res))
        this.router.navigate(['/home']);
        /*this.user = Object.entries(res)
        console.log(this.user[0][1])

        let array = Object.entries(res)
        if(array[0][0]=="message"){
          alert("error esta cuenta no existe")
        }else{

          for (let i = 0; i < array[0][1].password.length; i++) {
            const indexInAbc = alfabeto.indexOf(array[0][1].password[i]);
            if (indexInAbc < 0) {
                decipherText += array[0][1].password[i]
                continue;
            }
            let index = indexInAbc - alfabeto.indexOf(key[i]);
            if (index >= 0) {
                decipherText += alfabeto[index % alfabeto.length];
                continue;
            }
            if (index < 0) {
                decipherText += alfabeto[index + alfabeto.length];
            }
          }

          if(this.formlogin.value.password == decipherText){
            alert("Login exito")
          }else{
            alert("Contraseña incorrecta")
          }
        }*/
      })
      
    }else{
      alert("Llene todos los datos")
    }
  }
  
  get email(){ return this.formlogin.get('email');}
  get password(){ return this.formlogin.get('password');}
}

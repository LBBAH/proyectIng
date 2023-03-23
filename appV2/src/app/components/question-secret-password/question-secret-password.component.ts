import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IddServicesService } from 'src/app/service/idd-services.service';

@Component({
  selector: 'app-question-secret-password',
  templateUrl: './question-secret-password.component.html',
  styleUrls: ['./question-secret-password.component.css']
})
export class QuestionSecretPasswordComponent {
  resetPass: FormGroup;

  constructor(
    public formulario:FormBuilder, 
    public serviceIdd:IddServicesService
  ){  
    this.resetPass=this.formulario.group({      
      email:['',[Validators.required]],        
    })
  }


  resetPasswordUser(){
    this.serviceIdd.passwordQuestionSecret(this.resetPass.value).subscribe(res=>{
      console.log(res);
    })
  }

  get email(){ return this.resetPass.get('email');}


}

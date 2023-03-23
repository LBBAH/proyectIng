import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IddServicesService } from 'src/app/service/idd-services.service';

@Component({
  selector: 'app-question-secret-password',
  templateUrl: './question-secret-password.component.html',
  styleUrls: ['./question-secret-password.component.css']
})
export class QuestionSecretPasswordComponent {
  resetPass: FormGroup;
  answerQuestion: FormGroup;
  formAnswer:Boolean=false;
  formEmail:Boolean=true;
  divNuexPas:Boolean=false;
  dataQuestionAnsers:any;
  dataAnswer:any;
  

  constructor(
    public formulario:FormBuilder, 
    public serviceIdd:IddServicesService,
    public router:Router
  ){  
    this.resetPass=this.formulario.group({      
      email:['',[Validators.required]],        
    });
    this.answerQuestion=this.formulario.group({      
      answer:['',[Validators.required]],
      id_user:['',[Validators.required]]
    })
  }


  resetPasswordUser(){
    this.serviceIdd.passwordQuestionSecret(this.resetPass.value).subscribe(res=>{
      console.log(res);
      let arr = Object.entries(res);
        if(arr[0][0] == "error"){
          alert(arr[0][1])
        }else{
          this.dataQuestionAnsers=res
          this.formEmail=false
          this.formAnswer=true
          console.log(this.dataQuestionAnsers.value.questionsSecret)
        }
    })
  }

  respuestaPreguna(id_u:any){
    //console.log(id_user, this.answerQuestion.value.answer)
    this.serviceIdd.anserQuestionSecret({id_user:id_u,answer:this.answerQuestion.value.answer}).subscribe(res=>{
      let arr = Object.entries(res);
        if(arr[0][0] == "error"){
          alert(arr[0][1])
        }else{
          this.dataAnswer=res
          this.formAnswer=false
          this.divNuexPas=true
          console.log(this.dataQuestionAnsers.value.questionsSecret)
        }
    })
  }

  redirectLogin(){
    this.router.navigate(['login']);
  }

  get email(){ return this.resetPass.get('email');}
  get answer(){ return this.resetPass.get('answer');}


}

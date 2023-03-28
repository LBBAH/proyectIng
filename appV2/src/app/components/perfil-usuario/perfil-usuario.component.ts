import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IddServicesService } from 'src/app/service/idd-services.service';
import { AlertNewQuestionSecretComponent } from '../alert-new-question-secret/alert-new-question-secret.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { NewCursoComponent } from '../new-curso/new-curso.component';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit{

  CrearRecursos:Boolean=false;
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  cursosForIdUser:any;

  user:any;
  constructor(
    private router:Router,
    private http:HttpClient,
    private matDialog: MatDialog,
    private dataService: IddServicesService
  ){

  }

  ngOnInit(): void {
    this.status();

    if(localStorage.getItem('user')!=null){
      
      const user:any = localStorage.getItem('user');    
      const userObj = JSON.parse(user);      
      const token = userObj.token;
      const id_u = userObj.id;
      const typeUser = userObj.typeUser;
      this.dataService.getRolPrivUser({id_rol:typeUser, id_Privilegio:23}).subscribe(res=>{            
        let arr = Object.entries(res);
        if(arr[0][0] == "success"){
          this.CrearRecursos=true
        }
      }) 
      var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' });
      
      this.http.get('http://127.0.0.1:8000/api/user',{headers:tokenHeader}).subscribe((res)=>{        
        this.user=res;
        console.log(this.user);
        
      },(err) =>{
        console.log(err)
      });
      console.log(id_u)
      this.dataService.getrecurosIdUser({id:id_u}).subscribe(res=>{
        console.log(res)
        this.cursosForIdUser=res
      })

    }
  }


  toggleLoginIn(state:boolean):void{
    this.isLoggedIn.next(state);
  };

  status(){
    const localData :any = localStorage.getItem('user');
    if(!localData){      
      this.isLoggedIn.next(false);
      this.router.navigate([''])
    }else{      
      const userObj = JSON.parse(localData);
      const token_expires_at = new Date(userObj.token_expies_at);
      const current_date = new Date();
      
      if(token_expires_at > current_date){
        this.isLoggedIn.next(true)
      }else{
        this.isLoggedIn.next(false);
        console.log('token expires !!')
      }
    }
  }

  editarUsuario(id_u:any, nombre:any, nombreU:any, email:any, telefon:any){
    
    this.matDialog.open(EditUserComponent,
      {
        data:{
          id:id_u,
          nombre:nombre,
          nameU:nombreU,
          correo:email,
          telefono:telefon
        },
        width:"500px",
        height: "500px"
      });
  }

  questionSecret(id_u:any){
    this.matDialog.open(AlertNewQuestionSecretComponent,
      {
        data:{
          id:id_u
        },
        width:"500px",
        height: "500px"
      });
  }

  changePassword(id_u:any){
    this.matDialog.open(ChangePasswordComponent,
      {
        data:{
          id:id_u
        },
        width:"500px",
        height: "500px"
      });
  }
  verCursosId(id:any){
    this.router.navigate(['editCursoid/', id]);  
  }

  newCurso(id_u:any){
    this.matDialog.open(NewCursoComponent,
      {
        data:{
          id:id_u
        },
        width:"500px",
        height: "500px"
      });
  }
}

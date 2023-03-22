import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UsersService } from './services/users.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  user:any;
  dataUser:Boolean=false;
  RegisterLogin:Boolean=true;
  logOutUser:Boolean=true;

  dataUsers:Boolean=false;
  dataRoles:Boolean=false;
  dataPermisos:Boolean=false;
  dataAsociaciones:Boolean=false;
  dataCursos:Boolean=false;
  dataProductos:Boolean=false;
  dataBase:Boolean=false;

  private isLoggedIn = new BehaviorSubject<boolean>(false);
    
  constructor (private http:HttpClient, private serviceAuth:UsersService, private router:Router){}

  toggleLoginIn(state:boolean):void{
    this.isLoggedIn.next(state);
  };

  status(){
    const localData :any = localStorage.getItem('user');
    if(!localData){
      this.dataUser= false;
      this.RegisterLogin= true;
      this.isLoggedIn.next(false);
      console.log('User not logged in !!')
      
    }else{
      this.dataUser= true;
      this.RegisterLogin= false;
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
  
  ngOnInit(): void {
    this.status();
    if(localStorage.getItem('user')!=null){
      
      console.log(this.dataUser,this.RegisterLogin);
      const user:any = localStorage.getItem('user');    
      const userObj = JSON.parse(user);      
      const token = userObj.token;
      const typeUser = userObj.typeUser;

      this.serviceAuth.getRolPrivUser({id_rol:typeUser, id_Privilegio:12}).subscribe(res=>{            
        let arr = Object.entries(res);
        if(arr[0][0] == "success"){
          this.dataUsers = true
        }
      })     
      this.serviceAuth.getRolPrivUser({id_rol:typeUser, id_Privilegio:13}).subscribe(res=>{            
        let arr = Object.entries(res);
        if(arr[0][0] == "success"){
          this.dataRoles = true
        }
      }) 
      this.serviceAuth.getRolPrivUser({id_rol:typeUser, id_Privilegio:14}).subscribe(res=>{            
        let arr = Object.entries(res);
        if(arr[0][0] == "success"){
          this.dataPermisos = true
        }
      })  

      this.serviceAuth.getRolPrivUser({id_rol:typeUser, id_Privilegio:15}).subscribe(res=>{            
        let arr = Object.entries(res);
        if(arr[0][0] == "success"){
          this.dataAsociaciones = true
        }
      })  

      this.serviceAuth.getRolPrivUser({id_rol:typeUser, id_Privilegio:16}).subscribe(res=>{            
        let arr = Object.entries(res);
        if(arr[0][0] == "success"){
          this.dataCursos = true
        }
      }) 

      this.serviceAuth.getRolPrivUser({id_rol:typeUser, id_Privilegio:17}).subscribe(res=>{            
        let arr = Object.entries(res);
        if(arr[0][0] == "success"){
          this.dataProductos = true
        }
      })   
      this.serviceAuth.getRolPrivUser({id_rol:typeUser, id_Privilegio:18}).subscribe(res=>{            
        let arr = Object.entries(res);
        if(arr[0][0] == "success"){
          this.dataBase = true
        }
      })  

      var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' });
      
      this.http.get('http://127.0.0.1:8000/api/user',{headers:tokenHeader}).subscribe((res)=>{        
        this.user=res;
        console.log(this.user);
        
      },(err) =>{
        console.log(err)
      });


      

    }else{

      this.dataUser= false;
      this.RegisterLogin= true;
      console.log(this.dataUser,this.RegisterLogin);

    }
  
  }
    
  logout(){    
    this.serviceAuth.logout(true).subscribe(()=>{    
      localStorage.removeItem('user');
      this.router.navigate(['']).then(()=>{
        window.location.reload();
      })
    })          
  }

  title = 'administracion';
}

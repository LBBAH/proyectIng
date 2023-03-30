import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IddServicesService } from './service/idd-services.service';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user:any;
  dataUser:Boolean=false;
  RegisterLogin:Boolean=true;
  logOutUser:Boolean=true;

  private isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor (private http:HttpClient, private serviceAuth:IddServicesService, private router:Router){
    
  }

  toggleLoginIn(state:boolean):void{
    this.isLoggedIn.next(state);
  };

  status(){
    const localData :any = localStorage.getItem('user');
    if(!localData){
      this.dataUser= false;
      this.RegisterLogin= true;
      console.log(this.dataUser,this.RegisterLogin);
      this.isLoggedIn.next(false);
      console.log('User not logged in !!')
    }else{
      const userObj = JSON.parse(localData);
      this.dataUser= true;
      this.RegisterLogin= false;
      console.log(this.dataUser,this.RegisterLogin);
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
      const user:any = localStorage.getItem('user');    
      const userObj = JSON.parse(user);      
      const token = userObj.token;
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
    
  perfilUser(id:any){
    this.router.navigate(['perfilU',id])
  }

  logout(){    
      this.serviceAuth.logout(true).subscribe((res)=>{
        console.log(res);
        localStorage.removeItem('user');
        this.router.navigate(['']).then(()=>{
          window.location.reload();
        })
      })          
  }

  title = 'appV2';
}

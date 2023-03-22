import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/services/user';
import { UsersService } from 'src/app/services/users.service';
import { DialogComfirmComponent } from '../dialog-comfirm/dialog-comfirm.component';
import { DialogNewUserComponent } from '../dialog-new-user/dialog-new-user.component';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements AfterViewInit, OnInit{
  displayedColumns: string[] = ['id', 'name', 'nameUser', 'phone', 'email', 'option'];
  dataSource: any;
  user: any;
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  gestionRoles:Boolean=false;
  registrarAdmins:Boolean=false;
  modificarDatosUser:Boolean=false;
  usuarioInactivo:Boolean=false;

  constructor(
    private dataService:UsersService, 
    private router: Router,
    private matDialog: MatDialog,
    private serviceAuth:UsersService ) {     
  }

  ngOnInit(): void {
    if(localStorage.getItem('user')!=null){
            
      const user:any = localStorage.getItem('user');    
      const userObj = JSON.parse(user);      
      const token = userObj.token;
      const typeUser = userObj.typeUser;

      this.serviceAuth.getRolPrivUser({id_rol:typeUser, id_Privilegio:13}).subscribe(res=>{            
        let arr = Object.entries(res);
        if(arr[0][0] == "success"){
          this.gestionRoles=true
        }
      })     

      this.serviceAuth.getRolPrivUser({id_rol:typeUser, id_Privilegio:3}).subscribe(res=>{            
        let arr = Object.entries(res);
        if(arr[0][0] == "success"){
          this.registrarAdmins=true
        }
      })     

      this.serviceAuth.getRolPrivUser({id_rol:typeUser, id_Privilegio:4}).subscribe(res=>{            
        let arr = Object.entries(res);
        if(arr[0][0] == "success"){
          this.modificarDatosUser=true
        }
      })  
      
      this.serviceAuth.getRolPrivUser({id_rol:typeUser, id_Privilegio:6}).subscribe(res=>{            
        let arr = Object.entries(res);
        if(arr[0][0] == "success"){
          this.usuarioInactivo=true
        }
      })  
        

    }
  }
  
  


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {    
    this.getUsersData();
  }

  status(){
    const localData :any = localStorage.getItem('user');
    if(!localData){     
      this.isLoggedIn.next(false);
      console.log('User not logged in !!')
      
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

  getUsersData(){
    this.dataService.getData().subscribe(res => {
      this.user=res;
      this.dataSource = new MatTableDataSource<User>(this.user);      
    })
  }

  navigateIdUser(id:any){
    this.router.navigate(['user', id, 'details']);    
  }

  roles(){
    this.router.navigate(['roles']);    
  }

  refrescar(){
    this.getUsersData();
  }

  agregarUsuario(){
    this.matDialog.open(DialogNewUserComponent,
      {
        width:"500px",
        height: "500px"
      });
  }

  editarUsuario(idRol:number,name:string, nameUser:string, phone:string, email:string){
    this.matDialog.open(UserComponent,
      {
        data:{
          id: idRol,
          nombre:name,
          nameU:nameUser,
          telefono:phone,
          correo:email
        },
        width:"500px",
        height: "500px"
      });
  }
  

  UsuarioInactivo(idUser:number){
    this.matDialog.open(DialogComfirmComponent,
      {
        data:{
          id: idUser,
          message: "Esta opcion cambiara al usuario a tipo de usuario inactivo por lo que sus roles y privilegios cambiaran tambien ¿Desea continuar?",
          processDelete: 3
        },
      width:"500px",
      height: "500px",
      disableClose: true
    })
  }
}

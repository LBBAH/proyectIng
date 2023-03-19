import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
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
export class UsersComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'nameUser', 'phone', 'email', 'option'];
  dataSource: any;
  

  constructor(
    private dataService:UsersService, 
    private router: Router,
    private matDialog: MatDialog ) {     
  }
  
  user: any;


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {    
    this.getUsersData();
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

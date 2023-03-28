import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Rols } from 'src/app/services/rols';
import { UsersService } from 'src/app/services/users.service';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

//importar el DialogComponent del componente dialog
import { DialogComponent } from '../dialog/dialog.component';
import { DialogComfirmComponent } from '../dialog-comfirm/dialog-comfirm.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';



@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {

  gestionPermisos:Boolean=false;
  AgregaRol:Boolean=false;
  displayedColumns: string[] = ['id', 'rol', 'Description', 'option'];
  dataSource: any;
  

  constructor(private dataService:UsersService, 
    private router: Router,
    private matDialog: MatDialog,private serviceAuth:UsersService
    ) {     
  }
  
  user: any;


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {    
    this.getUsersData();
    if(localStorage.getItem('user')!=null){
            
      const user:any = localStorage.getItem('user');    
      const userObj = JSON.parse(user);      
      const token = userObj.token;
      const typeUser = userObj.typeUser;
      this.serviceAuth.getRolPrivUser({id_rol:typeUser, id_Privilegio:14}).subscribe(res=>{            
        let arr = Object.entries(res);
        if(arr[0][0] == "success"){
          this.gestionPermisos=true
        }
      }) 
      this.serviceAuth.getRolPrivUser({id_rol:typeUser, id_Privilegio:5}).subscribe(res=>{            
        let arr = Object.entries(res);
        if(arr[0][0] == "success"){
          this.AgregaRol=true
        }
      }) 
    }
  }
  getUsersData(){
    this.dataService.getRols().subscribe(res => {
      this.user=res;
      this.dataSource = new MatTableDataSource<Rols>(this.user);      
    })
  }

  navigateIdUser(id:any){
    this.router.navigate(['user', id, 'details']);    
  }

  roles(){
    this.router.navigate(['roles']);    
  }

  //abrir fomulario de matdialog
  agregarRol(){
    this.matDialog.open(DialogComponent,
      {
        width:"500px",
        height: "500px"

      });
  }

  permisos(){
    this.router.navigate(['privilegios']);  
  }
  
  refrescar(){
    this.getUsersData();
  }
  
  deleteRol(idRol:any){
    this.matDialog.open(DialogComfirmComponent,
      {
        data:{
          id: idRol,
          message: "¿ Desea Eliminar Rol?",
          processDelete: 2
        },
      width:"500px",
      height: "500px",
      disableClose: false
    })
  }

  updateRol(idRol:any, rolE:any, des:any){
    this.matDialog.open(DialogEditUserComponent,
      {
        data:{
          id: idRol,
          rol:rolE,
          Description:des,
          message: "Editar Rol",          
        },
      width:"500px",
      height: "500px",
      disableClose: false
    })
  }
  asigPriuv(idRol:any){
    this.router.navigate(['rolPrivilegio',idRol]); 
  }
    
}

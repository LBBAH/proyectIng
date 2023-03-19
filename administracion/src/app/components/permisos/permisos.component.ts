import { Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Privilegios } from 'src/app/services/privilegios';
import { DialogNewPrivilegioComponent } from '../dialog-new-privilegio/dialog-new-privilegio.component';
import { DialogComfirmComponent } from '../dialog-comfirm/dialog-comfirm.component';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent {
  displayedColumns: string[] = ['id', 'Description', 'option'];
  dataSource: any;
  

  constructor(private dataService:UsersService, 
    private router: Router,
    private matDialog: MatDialog,
    ) {     
  }
  
  permiso: any;


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {    
    this.getUsersData();
  }
  getUsersData(){
    this.dataService.getPrivilegios().subscribe(res => {
      this.permiso=res;
      this.dataSource = new MatTableDataSource<Privilegios>(this.permiso);      
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
    this.matDialog.open(DialogNewPrivilegioComponent,
      {
        width:"500px",
        height: "500px",
        disableClose: false

      });
  }

  refrescar(){
    this.getUsersData()
  }

  deletePrivilegio(idRol:any){
    this.matDialog.open(DialogComfirmComponent,
      {
        data:{
          id: idRol,
          message: "¿ Desea Eliminar Permiso?",
          processDelete: 1
        },
      width:"500px",
      height: "500px",
      disableClose: false
    })
  }
}

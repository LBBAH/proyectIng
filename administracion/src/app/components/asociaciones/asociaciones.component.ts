import { Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { asociacion } from 'src/app/services/asociaciones';

@Component({
  selector: 'app-asociaciones',
  templateUrl: './asociaciones.component.html',
  styleUrls: ['./asociaciones.component.css']
})
export class AsociacionesComponent {
  displayedColumns: string[] = ['id', 'asociasion', 'correo', 'Descripcion','Direccion', 'telefono', 'opciones'];
  dataSource: any;
  

  constructor(private dataService:UsersService, 
    private router: Router,
    private matDialog: MatDialog,
    ) {     
  }
  
  asociasiones: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {    
    this.getAsociasionesData();
  }
  getAsociasionesData(){
    this.dataService.getAsociasiones().subscribe(res => {
      this.asociasiones=res;
      this.dataSource = new MatTableDataSource<asociacion>(this.asociasiones);      
    })
  }
  asiacionId(id:any){

  }
  refrescar(){

  }
  agregarRol(){
    
  }
}

import { Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { Recursos } from 'src/app/services/recursos';


@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent {
  displayedColumns: string[] = ['id', 'name', 'Descripcion', 'vistaprevia', 'opciones'];
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
    this.dataService.getRecursos().subscribe(res => {
      this.asociasiones=res;
      this.dataSource = new MatTableDataSource<Recursos>(this.asociasiones);      
    })
  }

  refrescar(){

  }

  agregarRol(){

  }

  recursosId(id:any){

  }

  tipoRecursos(){
    this.router.navigate(['Tipocursos'])
  }
}

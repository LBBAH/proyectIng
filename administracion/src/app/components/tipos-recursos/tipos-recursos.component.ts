import { Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { Recursos } from 'src/app/services/recursos';
import { TipoRecursos } from 'src/app/services/tipoRecurso';
import { NewTypesRecurComponent } from '../new-types-recur/new-types-recur.component';
import { NewImageComponent } from '../new-image/new-image.component';


@Component({
  selector: 'app-tipos-recursos',
  templateUrl: './tipos-recursos.component.html',
  styleUrls: ['./tipos-recursos.component.css']
})
export class TiposRecursosComponent {
  displayedColumns: string[] = ['id', 'name', 'description', 'img', 'opciones'];
  dataSource: any;
  

  constructor(private dataService:UsersService, 
    private router: Router,
    private matDialog: MatDialog,
    ) {     
  }
  
  tipoRecursos: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {    
    this.getAsociasionesData();
  }
  getAsociasionesData(){
    this.dataService.getTypeRecursos().subscribe(res => {
      this.tipoRecursos=res;
      this.dataSource = new MatTableDataSource<TipoRecursos>(this.tipoRecursos);      
    })
  }

  refrescar(){
    this.getAsociasionesData();
  }

  agregarTipoRecurso(){
    this.matDialog.open(NewTypesRecurComponent,
      {
      width:"500px",
      height: "500px",
      disableClose: false
    })
  }

  agregarImagen(id_typeRecurso:any){
    this.matDialog.open(NewImageComponent,
      {data:{
        id:id_typeRecurso
      },
      width:"500px",
      height: "500px",
      disableClose: false
    })
  }

  viewCurso(){
    this.router.navigate(['cursos'])
  }

}

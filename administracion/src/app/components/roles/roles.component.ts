import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Rols } from 'src/app/services/rols';
import { UsersService } from 'src/app/services/users.service';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {
  displayedColumns: string[] = ['id', 'rol', 'Description', 'option'];
  dataSource: any;
  

  constructor(private dataService:UsersService, private router: Router ) {     
  }
  
  user: any;


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {    
    this.getUsersData();
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
}

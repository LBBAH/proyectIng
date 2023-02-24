import {AfterViewInit, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/services/user';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'nameUser', 'phone', 'email', 'option'];
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
}

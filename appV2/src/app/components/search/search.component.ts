import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { IddServicesService } from 'src/app/service/idd-services.service';
import { tipoRecurso } from 'src/app/service/tiporecurso';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  myControl = new FormControl('');
  options !: tipoRecurso[];

  FinalData !: Observable<tipoRecurso[]>;

  constructor(private service:IddServicesService,
    private router :Router) { 
    this.service.search().subscribe(item =>{
      this.options=item;
    })
  }

  ngOnInit(): void {
    this.FinalData=this.myControl.valueChanges.pipe(
      startWith(''),
      map(item=>{
        const name=item;
        return name?this._filter(name as string):this.options
      })
    )
  }

  SelectBand(name:any){
    console.log(name);
  }

  private _filter(name:string):tipoRecurso[]{
    const filterValue=name.toLocaleLowerCase();
    return this.options.filter(opt=>opt.name.toLocaleLowerCase().includes(filterValue));
  }

  redirecRecursos(id:any){
    this.router.navigate(['recurso/',id])
  }

}

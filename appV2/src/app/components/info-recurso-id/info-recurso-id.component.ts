import { HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IddServicesService } from 'src/app/service/idd-services.service';
import { LocalStorageServiceService } from 'src/app/service/local-storage-service.service';
import * as AOS from 'aos'
declare var paypal: { Buttons: (arg0: { createOrder: (data: any, action: any) => any; onApprove: (data: any, actions: any) => Promise<void>; onError: (err: any) => void; }) => { (): any; new(): any; render: { (arg0: any): void; new(): any; }; }; };


@Component({
  selector: 'app-info-recurso-id',
  templateUrl: './info-recurso-id.component.html',
  styleUrls: ['./info-recurso-id.component.css']
  ,
  providers: [LocalStorageServiceService]
})
export class InfoRecursoIdComponent implements OnInit{
  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;
  id:any
  editCurso:any;
  objetivos:any;
  seccion:any;
  recurso:any;
  titulo:any;
  valoresCampo: any[] = [];
  
  constructor(
    private activeRouter:ActivatedRoute,        
    private dataService: IddServicesService,
    private router:Router,
    private LocalStorageServiceService: LocalStorageServiceService
  ) { 
    
  }
  
  ngOnInit(): void {
    AOS.init()
    this.id=this.activeRouter.snapshot.paramMap.get('id');  
    this.dataService.getrecurosEditId({id:this.id}).subscribe(res=>{
      this.editCurso=res
      console.log(this.editCurso['Descripcion'])
    })
  
    this.dataService.showObejtivoCursoId({id_curso:this.id}).subscribe(res=>{
      
      this.objetivos=res
    })
    this.dataService.showSeccionCursoId({id_curso:this.id}).subscribe(res=>{
      
      this.seccion=res
    })
    this.getDataLS()
    this.comprar()
  }

  comprar(){    
      paypal.
      Buttons({
        createOrder:(data,action)=>{
          return action.order.create({
            purchase_units:[
              {
                description:'this.editCurso.name,',
                amount:{
                  currency_code:'MXN',
                  value:32
                }
              }
            ]          
          })
        },
        onApprove: async(data, actions)=>{
          const order = await actions.order.capture();
          console.log(order)
        },
        onError:err=>{
          console.log(err)
        }
      }).
      render(this.paypalElement.nativeElement)
    
    
  }

  getDataLS(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = { headers: headers };

    const data = this.LocalStorageServiceService.getItem('myData');
    this.titulo = data.title
    console.log(data.title);
    this.dataService.getDataML(this.titulo,options).subscribe(
      (response) => {
        console.log(response)
        this.valoresCampo = response;
        this.dataService.obtenerDatos(this.valoresCampo).subscribe((res)=>{          
          this.recurso=res;
        })
        console.log(this.valoresCampo)
      }
    )
        
  }

  verCursosId(id:any){    
    this.router.navigate(['infoRecurso/', id]); 
  }

}

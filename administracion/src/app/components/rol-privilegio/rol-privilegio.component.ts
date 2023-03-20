import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Privilegios } from 'src/app/services/privilegios';
import { UsersService } from 'src/app/services/users.service';
import { DialogComfirmComponent } from '../dialog-comfirm/dialog-comfirm.component';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-rol-privilegio',
  templateUrl: './rol-privilegio.component.html',
  styleUrls: ['./rol-privilegio.component.css']
})
export class RolPrivilegioComponent implements OnInit{
  id:any;
  privilegiosRolId:any;
  priv:any;
  formPriRol: FormGroup;
  
  constructor(    
    private activeRouter:ActivatedRoute,
    private dataUser:UsersService,
    private matDialog: MatDialog,
    public formulario:FormBuilder
    ){
      this.formPriRol=this.formulario.group({      
        id_rol:['', [Validators.required]],
        id_privilegio:['', [Validators.required]],
      })

  }
  ngOnInit(): void {
    this.id=this.activeRouter.snapshot.paramMap.get('id');

    this.dataUser.getRolPrivId(this.id).subscribe(res=>{
      console.log(res)
      this.privilegiosRolId=res;
    })

    this.dataUser.getPrivilegios().subscribe(res=>{
      this.priv=res;
    })

    
  }

  deleteRol(idPriv:any, idRol:any){
    this.matDialog.open(DialogComfirmComponent,
      {
        data:{
          id: idPriv,
          id2: idRol,
          message: "¿ Desea Eliminar este privilegio?",
          processDelete: 4
        },
      width:"500px",
      height: "500px",
      disableClose: false
    })
  }

  RolPriv(idPri:any){
    this.id=this.activeRouter.snapshot.paramMap.get('id');
    console.log(idPri)

    this.dataUser.addPriRol({id_privilegio:this.id, id_rol :idPri}).subscribe(res=>{
      let arr = Object.entries(res);
      if(arr[0][0] == "error"){
        alert(arr[0][1])
      }

      if(arr[0][0] == "success"){
        alert(arr[0][1])          
      }

      this.dataUser.getRolPrivId(this.id).subscribe(res=>{
        console.log(res)
        this.privilegiosRolId=res;
      })
    })    
  }


}

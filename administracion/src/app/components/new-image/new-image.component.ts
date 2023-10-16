import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-image',
  templateUrl: './new-image.component.html',
  styleUrls: ['./new-image.component.css']
})
export class NewImageComponent {
  formImagen:FormGroup;
  file:any;
  des:any;

  formdata= new FormData();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:
    {
      id: number,
      
    },
    private matDialogRef: MatDialogRef<NewImageComponent>,
    public formulario:FormBuilder,
    private dataService: UsersService,
  ){
    this.formImagen=this.formulario.group({
      file:[null, [Validators.required]],      
    })
    
  }

  imagensXD(){       
    this.dataService.agregarImg(this.data.id,this.formdata).subscribe(res=>{
      console.log(res)      
    })
  }

  imagenUp(event:any){      
    this.file=event.target.files[0];    
    this.formdata.append("file", this.file, this.file.name)
    console.log(this.formdata)   
  }
}


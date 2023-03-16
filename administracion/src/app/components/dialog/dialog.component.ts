//checar la funcion en el componente de roles para abrir el matdialog

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(
    private matDialogRef: MatDialogRef<DialogComponent>
  ){}

  //para cerrar el matdialog
  closeDialog(){
    this.matDialogRef.close()
  }
}

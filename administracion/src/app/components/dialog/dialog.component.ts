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

  closeDialog(){
    this.matDialogRef.close()
  }
}

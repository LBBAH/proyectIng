import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-dialog-comfirm',
  templateUrl: './dialog-comfirm.component.html',
  styleUrls: ['./dialog-comfirm.component.css']
})
export class DialogComfirmComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:
    {
      id: number,
      message: string,
      processDelete: number
    },
    private matDialogRef: MatDialogRef<DialogComfirmComponent>,    
    private userData: UsersService
  ){

  }

  closeDialog(){
    this.matDialogRef.close();
  }

  delets(id:number, proces:number){
    if(proces == 1){
      this.userData.deletePrivilegio(id).subscribe(res=>{
        let arr = Object.entries(res);
        if(arr[0][0] == "error"){
          alert(arr[0][1])
        }

        if(arr[0][0] == "success"){
          alert(arr[0][1])          
        }
      })
    }

    if(proces == 2){
      this.userData.deleteRol(id).subscribe(res=>{
        let arr = Object.entries(res);
        if(arr[0][0] == "error"){
          alert(arr[0][1])
        }

        if(arr[0][0] == "success"){
          alert(arr[0][1])          
        }
      })
    }

    if(proces == 3){
      this.userData.updateTypeU( {id:id} ).subscribe(res=>{
        let arr = Object.entries(res);
        if(arr[0][0] == "error"){
          alert(arr[0][1])
        }

        if(arr[0][0] == "success"){
          alert(arr[0][1])          
        }
      })
    }
    
  }
}

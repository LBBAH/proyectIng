import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient ) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/Usuarios');
  }

  getRols(){
    return this.httpClient.get('http://127.0.0.1:8000/api/rols');
  }

  getUser(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/getUser/'+id);
  }

  getPrivilegios(){
    return this.httpClient.get('http://127.0.0.1:8000/api/privilegios');
  }

  addPrivilegio(description:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addPrivilegio', description);
  }

  deletePrivilegio(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deletePrivilegio/'+id);
  }

  addRol(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addRol', data);
  }

  deleteRol(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteRol/'+id);
  }
  
  adduser(datosUsuario:any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/addUser', datosUsuario);
  }
  
  updateTypeU(id:any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/updateTypeUser', id);
  }

  UpdateUserz(id:any, datosUsuario:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/updateUser/'+id, datosUsuario);
  }

  UpdateRol(id:any, datosRol:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/actualizarRol/'+id, datosRol);
  }

  getRolPrivId(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/getRoles/' + id);
  }  

  deleteRolPriv(idpriv:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteRolPriv', idpriv);
  }

  addPriRol(datosPriRol:any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/addPriRol', datosPriRol);
  }

}

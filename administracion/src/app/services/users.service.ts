import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private httpClient: HttpClient ) { }

  getData(){
    return this.httpClient.get(`${this.apiUrl}/Usuarios`);
  }

  getRols(){
    return this.httpClient.get(`${this.apiUrl}/rols`);
  }

  getUser(id:any){
    return this.httpClient.get(`${this.apiUrl}/getUser/`+id);
  }

  getPrivilegios(){
    return this.httpClient.get(`${this.apiUrl}/privilegios`);
  }

  addPrivilegio(description:any){
    return this.httpClient.post(`${this.apiUrl}/addPrivilegio`, description);
  }

  deletePrivilegio(id:any){
    return this.httpClient.delete(`${this.apiUrl}/deletePrivilegio/`+id);
  }

  addRol(data:any){
    return this.httpClient.post(`${this.apiUrl}/addRol`, data);
  }

  deleteRol(id:any){
    return this.httpClient.delete(`${this.apiUrl}/deleteRol/`+id);
  }
  
  adduser(datosUsuario:any) {
    return this.httpClient.post(`${this.apiUrl}/addUser`, datosUsuario);
  }
  
  updateTypeU(id:any) {
    return this.httpClient.post(`${this.apiUrl}/updateTypeUser`, id);
  }

  UpdateUserz(id:any, datosUsuario:any){
    return this.httpClient.post(`${this.apiUrl}/updateUser/`+id, datosUsuario);
  }

  UpdateRol(id:any, datosRol:any){
    return this.httpClient.post(`${this.apiUrl}/actualizarRol/`+id, datosRol);
  }

  getRolPrivId(id:any){
    return this.httpClient.get(`${this.apiUrl}/getRoles/` + id);
  }  

  deleteRolPriv(idpriv:any){
    return this.httpClient.delete(`${this.apiUrl}/deleteRolPriv`, idpriv);
  }

  addPriRol(datosPriRol:any) {
    return this.httpClient.post(`${this.apiUrl}/addPriRol`, datosPriRol);
  }
  
  login(datosUsuario:any) {
    return this.httpClient.post(`${this.apiUrl}/loginAdmin`, datosUsuario);
  }

  logout(allDevice: boolean){
    const user:any = localStorage.getItem('user');
    console.log(user)
    const userObj = JSON.parse(user);        
    const token = userObj.token;  
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' });
    return this.httpClient.post(`${this.apiUrl}/logout`,{allDevice:allDevice},{headers: tokenHeader})
  }

  getRolPrivUser(id_rol:any){
    return this.httpClient.post(`${this.apiUrl}/rolPrivUser`,id_rol);
  }

  getAsociasiones(){
    return this.httpClient.get(`${this.apiUrl}/getAsociasiones`);
  }

  getRecursos(){
    return this.httpClient.get(`${this.apiUrl}/getRecursos`);
  }

  getTypeRecursos(){
    return this.httpClient.get(`${this.apiUrl}/getTypeRecurs`);
  }

  addTypeRecurso(dataTypeRecurso:any){
    return this.httpClient.post(`${this.apiUrl}/addTypeRecurso`, dataTypeRecurso);
  }

  agregarImg(id:any, dataImg:any){
    const headers = new HttpHeaders();
    return this.httpClient.post(`${this.apiUrl}/agregarImg/`+id, dataImg,{
      headers:headers
    });
  }

  handle(){
    return this.httpClient.get(`${this.apiUrl}/handle`)
  }

  bdRespose(dataBd:any){
    return this.httpClient.post(`${this.apiUrl}/bdRespose`,dataBd)
  }

  bdData(){
    return this.httpClient.get(`${this.apiUrl}/index`)
  }  


  dataUser(tokenHeader:any){
    return this.httpClient.get(`${this.apiUrl}/user`,{headers:tokenHeader});
  }


}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient ) { }

  getData(){
    return this.httpClient.get('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/Usuarios');
  }

  getRols(){
    return this.httpClient.get('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/rols');
  }

  getUser(id:any){
    return this.httpClient.get('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/getUser/'+id);
  }

  getPrivilegios(){
    return this.httpClient.get('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/privilegios');
  }

  addPrivilegio(description:any){
    return this.httpClient.post('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/addPrivilegio', description);
  }

  deletePrivilegio(id:any){
    return this.httpClient.delete('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/deletePrivilegio/'+id);
  }

  addRol(data:any){
    return this.httpClient.post('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/addRol', data);
  }

  deleteRol(id:any){
    return this.httpClient.delete('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/deleteRol/'+id);
  }
  
  adduser(datosUsuario:any) {
    return this.httpClient.post('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/addUser', datosUsuario);
  }
  
  updateTypeU(id:any) {
    return this.httpClient.post('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/updateTypeUser', id);
  }

  UpdateUserz(id:any, datosUsuario:any){
    return this.httpClient.post('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/updateUser/'+id, datosUsuario);
  }

  UpdateRol(id:any, datosRol:any){
    return this.httpClient.post('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/actualizarRol/'+id, datosRol);
  }

  getRolPrivId(id:any){
    return this.httpClient.get('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/getRoles/' + id);
  }  

  deleteRolPriv(idpriv:any){
    return this.httpClient.delete('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/deleteRolPriv', idpriv);
  }

  addPriRol(datosPriRol:any) {
    return this.httpClient.post('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/addPriRol', datosPriRol);
  }
  
  login(datosUsuario:any) {
    return this.httpClient.post('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/loginAdmin', datosUsuario);
  }

  logout(allDevice: boolean){
    const user:any = localStorage.getItem('user');
    console.log(user)
    const userObj = JSON.parse(user);        
    const token = userObj.token;  
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' });
    return this.httpClient.post('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/logout',{allDevice:allDevice},{headers: tokenHeader})
  }

  getRolPrivUser(id_rol:any){
    return this.httpClient.post('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/rolPrivUser',id_rol);
  }

  getAsociasiones(){
    return this.httpClient.get('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/getAsociasiones');
  }

  getRecursos(){
    return this.httpClient.get('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/getRecursos');
  }

  getTypeRecursos(){
    return this.httpClient.get('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/getTypeRecurs');
  }

  addTypeRecurso(dataTypeRecurso:any){
    return this.httpClient.post('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/addTypeRecurso', dataTypeRecurso);
  }

  agregarImg(id:any, dataImg:any){
    const headers = new HttpHeaders();
    return this.httpClient.post('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/agregarImg/'+id, dataImg,{
      headers:headers
    });
  }

  handle(){
    return this.httpClient.get('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/handle')
  }

  bdRespose(dataBd:any){
    return this.httpClient.post('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/bdRespose',dataBd)
  }

  bdData(){
    return this.httpClient.get('https://educacionespecialmx.site/iddeduback/idd_Educatio_back/public_html/api/index')
  }


}

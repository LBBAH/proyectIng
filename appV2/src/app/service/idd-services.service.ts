import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recurso } from './recurso';
import { tipoRecurso } from 'src/app/service/tiporecurso';

@Injectable({
  providedIn: 'root'
})
export class IddServicesService {

  constructor( private httpClient: HttpClient ) { }
    
  private apiUrl = 'http://127.0.0.1:8000/api';

  private apiUrlML = 'http://127.0.0.1:5000//api/recomendaciones?titulo=';

  
    getData(){
      return this.httpClient.get(`${this.apiUrl}/Usuarios`);
    }

    getDataML(title:any, options:any){
      return this.httpClient.post<any>(`${this.apiUrlML}${title}`, options);
    }
  
    adduser(datosUsuario:any) {
      return this.httpClient.post(`${this.apiUrl}/addUser`, datosUsuario);
    }

    obtenerDatos(datosML:any) {
      return this.httpClient.post(`${this.apiUrl}/getDatML`, datosML);
    }
  
    login(datosUsuario:any) {
      return this.httpClient.post(`${this.apiUrl}/login`, datosUsuario);
    }
     
    getTypeRecurs() {
      return this.httpClient.get(`${this.apiUrl}/getTypeRecurs`);
    }

    obtenerDatosPaginadosUseridurso(id:any, page: number): Observable<any> {
      return this.httpClient.get(`${this.apiUrl}/getrecurosUsersId/`+id+`?page=${page}&per_page=20`);
    }

    obtenerDatosPaginados(id:any, page: number): Observable<any> {
      return this.httpClient.get(`${this.apiUrl}/getrecurosId/`+id+`?page=${page}&per_page=20`);
    }
  
    findBandId(id:any):Observable<Recurso[]>{
      return this.httpClient.get<Recurso[]>(`${this.apiUrl}/getrecurosId/`+id);
    }

    buscarPorNombre(name: string): Observable<any> {
      return this.httpClient.get(`${this.apiUrl}/searchRecursos?name=${name}`);
    }
  
    search():Observable<tipoRecurso[]>{
      return this.httpClient.get<tipoRecurso[]>(`${this.apiUrl}/search`);
    }

    logout(allDevice: boolean){
      const user:any = localStorage.getItem('user');
      const userObj = JSON.parse(user);      
  
      const token = userObj.token;
  
      var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' });
      return this.httpClient.post(`${this.apiUrl}/logout`,{allDevice:allDevice},{headers: tokenHeader})
    }

    passwordQuestionSecret(email:any) {
      return this.httpClient.post(`${this.apiUrl}/questionSecrectUser`, email);
    }

    anserQuestionSecret(dataAnswer:any) {
      return this.httpClient.post(`${this.apiUrl}/respuesta`, dataAnswer);
    }
  
    UpdateUserz(id:any, datosUsuario:any){
      return this.httpClient.post(`${this.apiUrl}/updateUser/`+id, datosUsuario);
    }

    getQuestions(){
      return this.httpClient.get(`${this.apiUrl}/getQuestion`);
    }

    addQuestionUser(idUser:any, dataQuestionUser:any){
      return this.httpClient.post(`${this.apiUrl}/addQuestionUser/`+idUser, dataQuestionUser);
    }

    changePassword(idUser:any, dataQuestionUser:any){
      return this.httpClient.post(`${this.apiUrl}/changePassword/`+idUser, dataQuestionUser);
    }

    getrecurosIdUser(id:any){
      return this.httpClient.post(`${this.apiUrl}/api/getrecurosIdUser`,id);
    }
    
    getAsociasiones(){
      return this.httpClient.get(`${this.apiUrl}/getAsociasiones`);
    }

    getTypeRecursos(){
      return this.httpClient.get(`${this.apiUrl}/getTypeRecurs`);
    }

    getrecurosEditId(id:any){
      return this.httpClient.post(`${this.apiUrl}/getrecurosEditId`,id);
    }

    showObejtivoCursoId(id:any){
      return this.httpClient.post(`${this.apiUrl}/showObejtivoCursoId`,id);
    }

    showSeccionCursoId(id:any){
      return this.httpClient.post(`${this.apiUrl}/showSeccionCursoId`,id);
    }

    getRolPrivUser(id_rol:any){
      return this.httpClient.post(`${this.apiUrl}/rolPrivUser`,id_rol);
    }

    dataUser(tokenHeader:any){
      return this.httpClient.get(`${this.apiUrl}/user`,{headers:tokenHeader});
    }
}

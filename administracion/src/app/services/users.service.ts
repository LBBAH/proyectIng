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

  
}

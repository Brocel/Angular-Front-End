import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { UserImpl } from '@app/shared/model/implementation/user-impl'

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username:string, password:string) {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    age: number,
    country: string,
    state: string,
    city: string,
    password: string): Observable<any> {
      return this.http.post(AUTH_API + 'signup', {
        firstName,
        lastName,
        userName,
        email,
        age,
        country,
        state,
        city,
        password
      }, httpOptions);
    }
}

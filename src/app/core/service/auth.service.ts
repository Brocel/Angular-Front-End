import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserImpl } from '@app/shared/model/implementation/user-impl'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username:string, password:string) {
    return this.http.post<UserImpl>('api/authenticate', {username, password});
  }
}

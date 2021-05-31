import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserImpl } from '@app/shared/model/implementation/user-impl';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserImpl[]> {
    return this.http.get<UserImpl[]>('http://localhost:8080/api/users');
  }
}

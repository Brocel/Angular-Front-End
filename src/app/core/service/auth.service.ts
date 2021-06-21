import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

    authenticate(username: string, password: string) {
      if (username === "TestUser" && password === "TestPWD") {
        sessionStorage.setItem('username', username)
        return true;
      } else {
        return false;
      }
    }

    isUserLoggedIn() {
      let user = sessionStorage.getItem('username')
      console.log(!(user === null))
      return !(user === null)
    }

    logOut() {
      sessionStorage.removeItem('username')
    }
}

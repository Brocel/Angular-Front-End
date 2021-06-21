import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '@app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username = ''
    password = ''
    invalidLogin = false
    // authRequest:any={
    // userName:'',
    // password:''
    // };
    // response:any;

    constructor( private router: Router, private loginService: AuthService ) { }

    ngOnInit() { }

    checkLogin() {
    if (this.loginService.authenticate(this.username, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
    }

}

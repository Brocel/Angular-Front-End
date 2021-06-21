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
    form?: FormGroup;
    loading = false;
    submitted = false;
    returnUrl?: string;
    authRequest:any={
    "userName":"",
    "password":""
    };
    response:any;

    constructor(

    ) { }

    ngOnInit() {


    }

    
}

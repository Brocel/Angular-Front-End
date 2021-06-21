import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '@app/core/service/auth.service';
import { AlertService } from '@app/core/service/alert.service';

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
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private alertService: AlertService
    ) { }

    ngOnInit() {

      this.form = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    }

    // convenience getter for easy access to form fields
    get f() { return this.form?.controls; }

    // Jwt auth
    public getAccessToken(authRequest:any){
      let resp=this.authService.generateToken(authRequest);
      resp.subscribe(data=>this.accessApi(data));
    }
    
    public accessApi(token:any){
      let resp=this.authService.welcome(token);
      resp.subscribe(data=>this.response=data);
    }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form?.invalid) {
            return;
        }

        this.loading = true;
        this.authService.login(this.f?.username.value, this.f?.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}

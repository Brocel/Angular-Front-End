import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
//import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm!: FormGroup;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder,/*private authService: AuthService,*/private router: Router) {  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {

    try {
      const email = this.signInForm.get('email')?.value;
      const password = this.signInForm.get('password')?.value;
    } catch (e) {
      console.log(e);
    }


    // this.authService.signInUser(email, password).then(
    //   () => {
    //     this.router.navigate(['/protected/table-jeu']);
    //   },
    //   (error) => {
    //     this.errorMessage = error;
    //   }
    // );
  }
}

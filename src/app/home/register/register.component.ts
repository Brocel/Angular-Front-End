import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    firstName: null,
    lastName: null,
    userName: null,
    email: null,
    age: null,
    country: null,
    state: null,
    city: null,
    password: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { firstName, lastName, userName, email, age, country, state, city, password } = this.form;

    this.authService.register(
      firstName,
      lastName,
      userName,
      email,
      age,
      country,
      state,
      city,
    password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}

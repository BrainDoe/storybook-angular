import { LocalStorageService } from './../../service/local-storage.service';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;
  isSubmitted: boolean = false;
  authError: boolean = false;
  errorMessage: string = 'Invalid Login Login Details';

  constructor(private formBuilder: FormBuilder, 
              private router: Router,
              private authService: AuthService,
              private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  onSubmit() {
    this.isSubmitted = true;
    if(this.loginFormGroup.invalid) return

    const loginData = {
      email: this.loginForm.email.value,
      password: this.loginForm.password.value
    }
    this.authService.login(loginData).subscribe(data => {
      this.authError = false
      this.localStorageService.setToken(data.token)
      this.router.navigate(['/dashboard'])
    }, (error: HttpErrorResponse) => {
      this.authError = true
      if(error.status !== 400) {
        this.errorMessage = 'Error in the server. Please try again later'
      }
    })
    this.loginFormGroup.reset();
  }

  get loginForm() {
    return this.loginFormGroup.controls;
  }

  // To be implemented in the authService. // Just a test
  // setlocalStorage(responseObj: any) {
  //   const expires = moment().add(responseObj.token);

  //   localStorage.setItem('token', responseObj.token);
  //   localStorage.setItem('expires', JSON.stringify(expires.valueOf()));
  // }

  // logout() {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('expires');
  // }

  // getExpiration() {
  //   const expiration = localStorage.getItem('expires')!;
  //   const expiresAt = JSON.parse(expiration);
  //   return moment(expiresAt);
  // }

  // isLoggedIn() {
  //   return moment().isBefore(this.getExpiration());
  // }

}

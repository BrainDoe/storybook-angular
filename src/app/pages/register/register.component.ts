import { LocalStorageService } from './../../service/local-storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerFormGroup!: FormGroup;
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
    this.registerFormGroup = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      passwordConfirm: [null, Validators.required],
      image: [null, Validators.required]
    })
  }

  onSubmit() {
    this.isSubmitted = true;
    if(this.registerFormGroup.invalid) return

    const registerFormData = new FormData();
    registerFormData.append('name', this.registerForm.name.value);
    registerFormData.append('email', this.registerForm.email.value);
    registerFormData.append('password', this.registerForm.password.value);
    registerFormData.append('passwordConfirm', this.registerForm.passwordConfirm.value);
    registerFormData.append('image', this.registerForm.image.value);

    // Better To Loop Through the keys of the registerForm
    // Object.keys(this.registerForm).map(key => {
    //   registerFormData.append(key, this.registerForm[key].value)
    // });

    console.log(registerFormData);

    // this.authService.login(loginData).subscribe(data => {
    //   this.authError = false
    //   this.localStorageService.setToken(data.token)
    //   this.router.navigate(['/dashboard'])
    // })
    this.registerFormGroup.reset();
  }

  get registerForm() {
    return this.registerFormGroup.controls;
  }

}

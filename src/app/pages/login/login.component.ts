import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

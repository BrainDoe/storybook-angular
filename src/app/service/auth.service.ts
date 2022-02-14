import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'localhost:4100/api/users'

  constructor(private localStorageService: LocalStorageService, private http: HttpClient, private router: Router) { }

  login(loginData: any): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, loginData).pipe(catchError(this.handleError), tap((response) => response));
  }

  logout() {
    this.localStorageService.removeToken()
    this.router.navigate(['/login'])
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!'
      if(!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch(errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email already exists';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This email does not exist';
          break;  
        case 'INVALID_PASSWORD':
          errorMessage = 'This password is not correct';
          break;  
        case 'ERR_INTERNET_DISCONNECTED':
          errorMessage = 'Check your internet connection';
          break;  
      }
      return throwError(errorMessage);
  }

}

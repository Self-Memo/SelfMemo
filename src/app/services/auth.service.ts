import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
   }

  isLoggedIn(){
    return sessionStorage.getItem('token');
  }

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isLoggedInUser(){
    return  (JSON.parse(String(sessionStorage.getItem('token'))) ? JSON.parse(String(sessionStorage.getItem('token'))).role == 1 : false);
  }
  isLoggedInAdmin(){
    return (JSON.parse(String(sessionStorage.getItem('token'))) ? JSON.parse(String(sessionStorage.getItem('token'))).role == 0 : false);
  }
}

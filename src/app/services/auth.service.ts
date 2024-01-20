import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    return sessionStorage.getItem('token');
  }

  isLoggedInUser(){
    return JSON.parse(String(sessionStorage.getItem('token'))).role == 1;
  }
  isLoggedInAdmin(){
    return JSON.parse(String(sessionStorage.getItem('token'))).role == 0;
  }
}

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
    return sessionStorage.getItem('token') == 'user';
  }
  isLoggedInAdmin(){
    return sessionStorage.getItem('token') == 'admin';
  }
}

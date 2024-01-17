import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private apiUrl = 'http://localhost:8000/api/user.php';

  constructor(private http: HttpClient) {}

  createUser(userData: User) {
    return this.http.post(`${this.apiUrl}?action=create`, userData);
  }

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.http.post(`${this.apiUrl}?action=login`, loginData);
  }
}
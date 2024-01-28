import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import config from '../../../config.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = config.serverURL + '/api/users';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Access-Control-Allow-Origin', '*');
  }

  createUser(userData: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData, { headers: this.headers });
  }

  updateUser(userData: User): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userData.id}`, userData, { headers: this.headers });
  }

  deleteUser(userData: User): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userData.id}`, { headers: this.headers });
  }

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.http.post(`${this.apiUrl}/login`, loginData, { headers: this.headers });
  }

  getAll(): Observable<any> {

    return this.http.get(`${this.apiUrl}`, { headers: this.headers });
  }
}
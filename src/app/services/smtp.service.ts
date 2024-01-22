import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { SMPT } from '../models/SMTP';

@Injectable({
  providedIn: 'root'
})
export class SmtpService {

  private apiUrl = 'http://localhost:8000/api/smtpsettings';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Access-Control-Allow-Origin', '*');
  }

  getSmtpSettings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`, { headers: this.headers });
  }

  setSmtpSettings(smtp: SMPT): Observable<any> {
    return this.http.post(`${this.apiUrl}/`, smtp, { headers: this.headers });
  }

}

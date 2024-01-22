import { Injectable } from '@angular/core';
import { Reminder } from '../models/Reminder';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  activeReminder = new BehaviorSubject<Reminder>(null as any);
  private apiUrl = 'http://localhost:8000/api/reminders';  
  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Access-Control-Allow-Origin', '*');
  }

  getActivereminder(): Reminder{
    return this.activeReminder.value;
  }

  setActiveReminder( newActiveReminder : Reminder){
    this.activeReminder.next(newActiveReminder);
  }


  getAllReminders(): Observable<any> {
    return this.http.get(`${this.apiUrl}`, {headers:this.headers});
  }

  getReminderById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}`, {headers:this.headers});
  }

  getRemindersByUserId(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}`, {headers:this.headers});
  }

  createReminder(reminderData: Reminder): Observable<any> {
    return this.http.post(`${this.apiUrl}/${reminderData.id}`, reminderData, {headers:this.headers});
  }

  updateReminder(reminder: Reminder): Observable<any> {
    return this.http.put(this.apiUrl, reminder, {headers:this.headers});
  }

  deleteReminder(id: number): Observable<any> {
	let reminderData = new HttpParams()
    reminderData.append("id", id)
    return this.http.delete(this.apiUrl, {params:reminderData});
  }
}

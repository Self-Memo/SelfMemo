import { Injectable } from '@angular/core';
import { Reminder } from '../models/Reminder';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  activeReminder = new BehaviorSubject<Reminder>(null as any);
  private apiUrl = 'http://localhost:8000/api/reminder.php';
  
  constructor(private http: HttpClient) {}

  getActivereminder(): Reminder{
    return this.activeReminder.value;
  }

  setActiveReminder( newActiveReminder : Reminder){
    this.activeReminder.next(newActiveReminder);
  }



  getAllReminders(): Observable<any> {
    return this.http.get(`${this.apiUrl}?action=get_all`);
  }

  getReminderById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?action=get&id=${id}`);
  }

  createReminder(reminderData: any): Observable<any> {
    return this.http.post(this.apiUrl, reminderData);
  }

  updateReminder(reminderData: any): Observable<any> {
    return this.http.patch(this.apiUrl, reminderData);
  }

  deleteReminder(id: number): Observable<any> {
	let reminderData = new HttpParams()
    reminderData.append("id", id)
    return this.http.delete(this.apiUrl, {params:reminderData});
  }
}

import { Injectable } from '@angular/core';
import { Reminder } from '../models/Reminder';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  activeReminder = new BehaviorSubject<Reminder>(null as any);

  constructor() { }

  getActivereminder(): Reminder{
    return this.activeReminder.value;
  }

  setActiveReminder( newActiveReminder : Reminder){
    this.activeReminder.next(newActiveReminder);
  }
}

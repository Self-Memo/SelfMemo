import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Reminder } from 'src/app/models/Reminder';
import { ReminderService } from 'src/app/services/reminder.service';

@Component({
  selector: 'app-configure-reminder',
  templateUrl: './configure-reminder.component.html',
  styleUrls: ['./configure-reminder.component.scss']
})
export class ConfigureReminderComponent implements OnInit{
  
  reminder: Reminder = null as any;

  constructor(private reminderService: ReminderService) { }

  ngOnInit(): void {
    this.reminderService.activeReminder.subscribe(update => {
      this.reminder = update;
    });
  }

  onChange(event:any){
    this.reminderService.setActiveReminder(this.reminder);
  }
  
}

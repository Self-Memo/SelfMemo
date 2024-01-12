import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailType } from 'src/app/models/EmailTypeEnum';
import { Reminder } from 'src/app/models/Reminder';
import { ReminderService } from 'src/app/services/reminder.service';

@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.component.html',
  styleUrls: ['./add-reminder.component.scss']
})
export class AddReminderComponent implements OnInit{
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  isLinear = false;
  isSecondCompleted = true;
  EmailType = EmailType; 

  reminder : Reminder = new Reminder();

  constructor(private _formBuilder: FormBuilder, private reminderService:ReminderService){
  }
  
  ngOnInit(): void {
    this.reminderService.setActiveReminder(new Reminder());
    this.reminderService.activeReminder.subscribe(update => {
      this.reminder = update;
    });

  }

  onChange(event:any){
    this.reminderService.setActiveReminder(this.reminder);
  }

  onSave(){
    console.log(this.reminder);
  }
}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { EmailType } from 'src/app/models/EmailTypeEnum';
import { Reminder } from 'src/app/models/Reminder';
import { User } from 'src/app/models/User';
import { ReminderService } from 'src/app/services/reminder.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

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

  constructor(private _formBuilder: FormBuilder, private reminderService:ReminderService, public snackbarService :SnackbarService){
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

  async onSave(){
    let user: User = JSON.parse(String(sessionStorage.getItem('token')));
    this.reminder.user_id = String(user.id);
    let userReminders = this.reminderService.createReminder(this.reminder);
    await lastValueFrom(userReminders)
      .catch((error: HttpErrorResponse) => {
        console.log("error: ", error);
        this.snackbarService.showSnackbar(2, "Reminder creation faild!");
        return;
      })
      .then(val => {
      });
  }
}

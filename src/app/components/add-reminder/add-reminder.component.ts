import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailType } from 'src/app/models/EmailTypeEnum';

@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.component.html',
  styleUrls: ['./add-reminder.component.scss']
})
export class AddReminderComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  isLinear = false;
  isSecondCompleted = true;
  EmailType = EmailType; 

  constructor(private _formBuilder: FormBuilder){}
}

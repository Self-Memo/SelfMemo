import {Component, OnInit} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { EmailType } from 'src/app/models/EmailTypeEnum';
import { WeekDay } from '@angular/common';
import { Week } from 'src/app/models/Week';

@Component({
  selector: 'app-event-schedule',
  templateUrl: './event-schedule.component.html',
  styleUrls: ['./event-schedule.component.scss']
})
export class EventScheduleComponent implements OnInit {

  emailType: EmailType = EmailType.DAILY;
  EmailType = EmailType;
  week: Week = new Week();

  constructor(){}

  ngOnInit(): void {
  }
}

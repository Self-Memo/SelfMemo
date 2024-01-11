import {Component, OnInit} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { EmailType } from 'src/app/models/EmailTypeEnum';
import { WeekDay } from '@angular/common';
import { Week } from 'src/app/models/Week';
import { YearEnum } from 'src/app/models/YearEnum';

@Component({
  selector: 'app-event-schedule',
  templateUrl: './event-schedule.component.html',
  styleUrls: ['./event-schedule.component.scss']
})
export class EventScheduleComponent implements OnInit {

  emailType: EmailType = EmailType.YEARLY;
  EmailType = EmailType;
  Year = YearEnum;
  week: Week = new Week();
  selectedDayOfMonth:number = 1;
  daysOfMonth: number[] = [];
  selectedMonth :number = YearEnum.JANUARY;

  constructor(){}

  ngOnInit(): void {
    this.daysOfMonth = this.range(31);
  }

  range(max: number): number[]{
    let result : number[] = [];
    for (let i = 1; i <= max; i++){
      result.push(i);
    }
    return result;
  }
}

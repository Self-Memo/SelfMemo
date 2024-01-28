import { Component, OnInit } from '@angular/core';
import { EmailType } from 'src/app/models/EmailTypeEnum';
import { Week } from 'src/app/models/Week';
import { MonthEnum } from 'src/app/models/MonthEnum';
import { ReminderService } from 'src/app/services/reminder.service';
import { Reminder } from 'src/app/models/Reminder';
import { UtilitiesComponent } from '../utilities/utilities.component';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-event-schedule',
  templateUrl: './event-schedule.component.html',
  styleUrls: ['./event-schedule.component.scss']
})
export class EventScheduleComponent implements OnInit {

  public selectedDateFormat: string = this.settingService.selectedDateFormat.value;

  emailType: EmailType | undefined = EmailType.YEARLY;
  EmailType = EmailType;
  Months = MonthEnum;
  week: Week = new Week();
  daysOfMonth: number[] = [];
  hoursOfDay: number[] = [];
  minutesOfHour: number[] = [];
  todayDate: Date = new Date();

  hourOfDay: number = 0;
  minuteOfHour: number = 0;

  selectedMonth: number = MonthEnum.JANUARY;

  reminder: Reminder = null as any;

  constructor(private reminderService: ReminderService, public settingService: SettingService) { }

  ngOnInit(): void {

    this.settingService.selectedDateFormat.subscribe(val => {
      const format = (val as string).replaceAll("m", "").replaceAll("h", "").replaceAll(":", "");
      this.selectedDateFormat = format;
    });

    this.daysOfMonth = UtilitiesComponent.rangeGenerator(1, 31, 1);
    this.hoursOfDay = UtilitiesComponent.rangeGenerator(0, 23, 1);
    this.minutesOfHour = UtilitiesComponent.rangeGenerator(0, 59, 5);

    this.reminderService.activeReminder.subscribe(update => {
      this.reminder = update;
    });
  }

  onWeeklyChange(event: any) {
    let newWeek: Week = new Week();

    switch (event.value) {
      case 0:
        newWeek.monday = true;
        break;
      case 1:
        newWeek.tuesday = true;
        break;
      case 2:
        newWeek.wednesday = true;
        break;
      case 3:
        newWeek.thursday = true;
        break;
      case 4:
        newWeek.friday = true;
        break;
      case 5:
        newWeek.saturday = true;
        break;
      case 6:
        newWeek.sunday = true;
        break;
    }

    this.reminder.daysOfWeekBitMask = UtilitiesComponent.weekToBitMask(newWeek);
    this.onChange(null);
  }

  onChange(event: any) {
    this.reminderService.setActiveReminder(this.reminder);
  }

  onNextDateChange(event: any) {
    let nextEvent: Date = new Date(event.value)
    nextEvent.setHours(this.hourOfDay);
    nextEvent.setMinutes(this.minuteOfHour);

    this.reminder.nextEvent = nextEvent;
    this.onChange(event);
  }

  onDailyClick() {
    this.reminder.daysOfWeekBitMask = UtilitiesComponent.weekToBitMask(this.week);
    this.onChange(null);
  }
}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { lastValueFrom } from 'rxjs';
import { DateFormat } from 'src/app/models/DateFormatEnum';
import { EmailType } from 'src/app/models/EmailTypeEnum';
import { ListEntry } from 'src/app/models/ListEntry';
import { Reminder } from 'src/app/models/Reminder';
import { User } from 'src/app/models/User';
import { ReminderService } from 'src/app/services/reminder.service';
import { SettingService } from 'src/app/services/setting.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  listEntries: Reminder[] = [
    { active: true, subject: 'Quick follow-up on our meeting', type: EmailType.DAILY, nextEvent: new Date(2018, 0O5, 0O5, 17, 23, 42, 11) },
    { active: true, subject: 'Sales Report', type: EmailType.WEEKLY, nextEvent: new Date(2023, 2, 0o5, 17, 30, 42, 11) },
    { active: true, subject: 'Marketing Updates', type: EmailType.MONTHLY, nextEvent: new Date(2023, 5, 0o7, 17, 15, 42, 11) },
    { active: true, subject: 'Project Status Meeting', type: EmailType.DAILY, nextEvent: new Date(2023, 8, 0o5, 17, 55, 42, 11) },
    { active: true, subject: 'Financial Analysis', type: EmailType.WEEKLY, nextEvent: new Date(2023, 10, 0o5, 17, 10, 42, 11) },
    { active: true, subject: 'Product Development Update', type: EmailType.DAILY, nextEvent: new Date(2023, 1, 0o5, 17, 20, 42, 11) },
    { active: true, subject: 'Team Meeting Agenda', type: EmailType.YEARLY, nextEvent: new Date(2023, 4, 0o5, 17, 45, 42, 11) },
    { active: true, subject: 'Customer Feedback Summary', type: EmailType.DAILY, nextEvent: new Date(2023, 7, 0o5, 17, 0o5, 42, 11) },
    { active: false, subject: 'HR Policy Updates', type: EmailType.YEARLY, nextEvent: new Date(2023, 9, 0o2, 17, 35, 42, 11) },
    { active: false, subject: 'Weekly Performance Metrics', type: EmailType.DAILY, nextEvent: new Date(2023, 11, 0o5, 17, 25, 42, 11) },
    { active: false, subject: 'Quarterly Review Meeting', type: EmailType.MONTHLY, nextEvent: new Date(2023, 3, 0o5, 17, 50, 42, 11) },
    { active: true, subject: 'Supply Chain Update', type: EmailType.WEEKLY, nextEvent: new Date(2023, 6, 0o3, 17, 40, 42, 11) },
    { active: true, subject: 'Monthly Sales Forecast', type: EmailType.MONTHLY, nextEvent: new Date(2023, 0, 0o1, 17, 0o0, 42, 11) },
    { active: true, subject: 'Tech Innovation Briefing', type: EmailType.ONCE, nextEvent: new Date(2023, 12, 0o5, 17, 18, 42, 11) },
    { active: true, subject: 'Customer Service Metrics', type: EmailType.DAILY, nextEvent: new Date(2023, 2, 0o2, 17, 28, 42, 11) },
    { active: true, subject: 'Quality Assurance Review', type: EmailType.ONCE, nextEvent: new Date(2023, 5, 0o5, 17, 48, 42, 11) }];
  displayedColumns: string[] = ['active', 'subject', 'type', 'nextEvent'];
  
  public selectedDateFormat : DateFormat = this.settingService.selectedDateFormat.value;
  @ViewChild(MatSort) sort: MatSort | undefined;
  public dataSource: MatTableDataSource<Reminder> = new MatTableDataSource();
  public user :User = {}

  constructor(public reminderService: ReminderService, public snackbarService: SnackbarService, public settingService: SettingService){
    this.dataSource = new MatTableDataSource();
  }
  
  async ngOnInit(): Promise<void> {

    this.user = JSON.parse(String(sessionStorage.getItem('token')));
    let userReminders = this.reminderService.getRemindersByUserId(String(this.user.id));
    await lastValueFrom(userReminders)
      .catch((error: HttpErrorResponse) => {
        console.log("error: ", error);
        this.snackbarService.showSnackbar(2, "Reminder retrival faild!");
        return;
      })
      .then(val => {
        this.dataSource = new MatTableDataSource(this.listEntries);
        this.setSort();
      });

    this.settingService.selectedDateFormat.subscribe( val => {
      this.selectedDateFormat = val;
    })

  }

  ngAfterViewInit() {
    this.setSort();
  }

  setSort(){
    (this.sort ? this.sort.sort(({ id: 'nextEvent', start: 'asc'}) as MatSortable) : this.sort);
    this.dataSource.sort = (this.sort ? this.sort : null);
  }

  async onActiveChange(reminder:Reminder){
    let updateReminder = this.reminderService.updateReminder(reminder);
    await lastValueFrom(updateReminder)
      .catch((error: HttpErrorResponse) => {
        console.log("error: ", error);
        this.snackbarService.showSnackbar(2, "Update failed!");
        return;
      })
      .then(val => {
      });
  }
}

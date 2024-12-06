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
  displayedColumns: string[] = ['active', 'subject', 'type', 'nextEvent'];

  public selectedDateFormat: DateFormat = this.settingService.selectedDateFormat.value;
  @ViewChild(MatSort) sort: MatSort | undefined;
  public dataSource: MatTableDataSource<Reminder> = new MatTableDataSource();
  public user: User = {}
  public emailTypes = EmailType

  constructor(public reminderService: ReminderService, public snackbarService: SnackbarService, public settingService: SettingService) {
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
        this.dataSource = new MatTableDataSource(val.reminder);
        this.setSort();
      });

    this.settingService.selectedDateFormat.subscribe(val => {
      this.selectedDateFormat = val;
    })

  }

  ngAfterViewInit() {
    this.setSort();
  }

  setSort() {
    (this.sort ? this.sort.sort(({ id: 'nextEvent', start: 'asc' }) as MatSortable) : this.sort);
    this.dataSource.sort = (this.sort ? this.sort : null);
  }

  async onActiveChange(reminder: Reminder) {
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

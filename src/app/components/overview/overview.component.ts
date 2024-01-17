import { Component, OnInit } from '@angular/core';
import { DateFormat } from 'src/app/models/DateFormatEnum';
import { EmailType } from 'src/app/models/EmailTypeEnum';
import { ListEntry } from 'src/app/models/ListEntry';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  listEntries: ListEntry[] = [
    { active: true, subject: 'Quick follow-up on our meeting', type: EmailType.DAILY, createdDateTime: new Date(2018, 0O5, 0O5, 17, 23, 42, 11) },
    { active: true, subject: 'Sales Report', type: EmailType.WEEKLY, createdDateTime: new Date(2023, 2, 0o5, 17, 30, 42, 11) },
    { active: true, subject: 'Marketing Updates', type: EmailType.MONTHLY, createdDateTime: new Date(2023, 5, 0o7, 17, 15, 42, 11) },
    { active: true, subject: 'Project Status Meeting', type: EmailType.DAILY, createdDateTime: new Date(2023, 8, 0o5, 17, 55, 42, 11) },
    { active: true, subject: 'Financial Analysis', type: EmailType.WEEKLY, createdDateTime: new Date(2023, 10, 0o5, 17, 10, 42, 11) },
    { active: true, subject: 'Product Development Update', type: EmailType.DAILY, createdDateTime: new Date(2023, 1, 0o5, 17, 20, 42, 11) },
    { active: true, subject: 'Team Meeting Agenda', type: EmailType.YEARLY, createdDateTime: new Date(2023, 4, 0o5, 17, 45, 42, 11) },
    { active: true, subject: 'Customer Feedback Summary', type: EmailType.DAILY, createdDateTime: new Date(2023, 7, 0o5, 17, 0o5, 42, 11) },
    { active: false, subject: 'HR Policy Updates', type: EmailType.YEARLY, createdDateTime: new Date(2023, 9, 0o2, 17, 35, 42, 11) },
    { active: false, subject: 'Weekly Performance Metrics', type: EmailType.DAILY, createdDateTime: new Date(2023, 11, 0o5, 17, 25, 42, 11) },
    { active: false, subject: 'Quarterly Review Meeting', type: EmailType.MONTHLY, createdDateTime: new Date(2023, 3, 0o5, 17, 50, 42, 11) },
    { active: true, subject: 'Supply Chain Update', type: EmailType.WEEKLY, createdDateTime: new Date(2023, 6, 0o3, 17, 40, 42, 11) },
    { active: true, subject: 'Monthly Sales Forecast', type: EmailType.MONTHLY, createdDateTime: new Date(2023, 0, 0o1, 17, 0o0, 42, 11) },
    { active: true, subject: 'Tech Innovation Briefing', type: EmailType.ONCE, createdDateTime: new Date(2023, 12, 0o5, 17, 18, 42, 11) },
    { active: true, subject: 'Customer Service Metrics', type: EmailType.DAILY, createdDateTime: new Date(2023, 2, 0o2, 17, 28, 42, 11) },
    { active: true, subject: 'Quality Assurance Review', type: EmailType.ONCE, createdDateTime: new Date(2023, 5, 0o5, 17, 48, 42, 11) }];
  displayedColumns: string[] = ['Active', 'Subject', 'Type', 'Next Event'];

  public selectedDateFormat = DateFormat.ISO;
  public DateFormat = DateFormat;

  constructor(){}
  
  ngOnInit(): void {
    // Intentionaly blank
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DateFormat } from '../models/DateFormatEnum';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  selectedDateFormat = new BehaviorSubject<DateFormat>(this.getDateFormatFromLocalSotrage());

  constructor() { }

  getDateFormatFromLocalSotrage(): DateFormat {
    switch (localStorage.getItem('DateFormat')) {
      case 'iso':
        return DateFormat.ISO
      case 'unix':
        return DateFormat.UNIX
      case 'utc':
        return DateFormat.UTC
      default:
        return DateFormat.ISO
    }
  }
}

import { Component } from '@angular/core';
import { DateFormat } from 'src/app/models/DateFormatEnum';
import { AuthService } from 'src/app/services/auth.service';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public selectedDateFormat = DateFormat.ISO;
  public DateFormat = DateFormat;

  constructor(private authService: AuthService, public settingService: SettingService) { }

  onLogoutClick() {
    this.authService.logout();
  }

  isUserLoggedIn() {
    return this.authService.isLoggedInUser();
  }

  onSelectDateFormat() {
    this.settingService.selectedDateFormat.next(this.selectedDateFormat);
  }
}

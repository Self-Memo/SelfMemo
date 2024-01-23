import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { SMPT } from 'src/app/models/SMTP';
import { User } from 'src/app/models/User';
import { SmtpService } from 'src/app/services/smtp.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent implements OnInit {

  users: User[] = [];
  
  constructor(private router: Router, private snackbarService: SnackbarService, private userService: UserService, private smtpService: SmtpService){}

  async ngOnInit(): Promise<void> {
    let usersRequest = this.userService.getAll();
    await lastValueFrom(usersRequest)
      .catch((error: HttpErrorResponse) => {
        console.log("error: ", error);
        this.snackbarService.showSnackbar(2, "Loading of users failed!");
        return;
      })
      .then(val => {
        this.users = (val.users ? (val.users) : []);
      });
  }

  async onUpdateUserClick(user: User){
    let usersRequest = this.userService.updateUser(user);
    await lastValueFrom(usersRequest)
      .catch((error: HttpErrorResponse) => {
        console.log("error: ", error);
        this.snackbarService.showSnackbar(2, "Loading of users failed!");
        return;
      })
      .then(val => {
        this.users = (val.users ? (val.users) : []);
      });
  }
}

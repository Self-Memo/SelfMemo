import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/models/User';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent implements OnInit {

  users: User[] = [];

  constructor(private snackbarService: SnackbarService, private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    this.updateUserList();

    this.userService.userAdded.subscribe(val => {
      this.updateUserList();
    });
  }

  async updateUserList() {
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

  async onUpdateUserClick(user: User) {
    let usersRequest = this.userService.updateUser(user);
    await lastValueFrom(usersRequest)
      .catch((error: HttpErrorResponse) => {
        console.log("error: ", error);
        this.snackbarService.showSnackbar(2, "Loading of users failed!");
        return;
      })
      .then(() => {
        this.updateUserList();
      });
  }

  async onDeleteUserClick(user: User) {
    let usersRequest = this.userService.deleteUser(user);
    await lastValueFrom(usersRequest)
      .catch((error: HttpErrorResponse) => {
        console.log("error: ", error);
        this.snackbarService.showSnackbar(2, "Delition of users failed!");
        return;
      })
      .then(() => {
        this.updateUserList();
      });
  }
}

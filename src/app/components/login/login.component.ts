import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/models/User';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private router: Router, private userService: UserService, private snackbarService : SnackbarService) { }

  ngOnInit(): void {
    // Intentionally blank
    // this.username= 'admin';
    // this.onLoginClick();
  }

  async onLoginClick() {
    let loggedInUser: User = null as any;
    let login = this.userService.login(this.username, this.password);
    await lastValueFrom(login).then(val => {
      loggedInUser = val.user;
    });

    if(!loggedInUser || !loggedInUser.id){
      this.snackbarService.showSnackbar(2, "An Error occured!");
      return;
    }

    switch (loggedInUser.role) {
      case 0:
        sessionStorage.setItem('token', JSON.stringify(loggedInUser));
        this.router.navigate(['/admin-page']);
        break;
      case 1:
        sessionStorage.setItem('token', JSON.stringify(loggedInUser));
        this.router.navigate(['/user-page']);
        break;

      default:
        break;
    }
  }
}

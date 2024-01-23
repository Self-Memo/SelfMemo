import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/models/User';
import { SmtpService } from 'src/app/services/smtp.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss']
})
export class UserCreationComponent {

  user:User = {}
  repeatPassword = '';
  
  constructor(private router: Router, private snackbarService: SnackbarService, private userService: UserService, private smtpService: SmtpService){}

  async onAddUserClick() {

    if(this.user.password !== this.repeatPassword || this.user.password.length < 1){
      this.snackbarService.showSnackbar(1,"Check your password");
      return;
    }

    /** Add User Logic */
    let file = this.userService.createUser(this.user);
    await lastValueFrom(file).then(val => {
      this.snackbarService.showSnackbar(1,"User \"" + val.user.username + "\" created!")
    });

    this.user = {};
    this.repeatPassword = '';
    
  }
}

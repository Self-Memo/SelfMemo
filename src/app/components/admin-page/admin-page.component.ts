import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  user:User = {}
  repeatPassword = '';

  constructor(private router: Router, private snackBar: MatSnackBar, private userService: UserService){}

  ngOnInit(): void {
  
  }

  async onAddUserClick() {
    if(this.user.password !== this.repeatPassword || this.user.password.length < 1){
      this.snackBar.open("Check your passwords","OK");
      setTimeout( () => { this.snackBar.dismiss() }, 2000 );
      return
    }

    /** Add User Logic */
    let file = this.userService.createUser(this.user);
    await lastValueFrom(file).then(val => {
      console.log(val);
    });

    this.user = {};
    this.repeatPassword = '';
    
  }

  openSnackBar() {
    
  }
}

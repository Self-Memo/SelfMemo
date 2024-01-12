import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  username = '';
  password = '';
  repeatPassword = '';

  constructor(private router: Router, private snackBar: MatSnackBar){}

  ngOnInit(): void {
  
  }

  onAddUserClick() {
    if(this.password !== this.repeatPassword || this.password.length < 1){
      this.snackBar.open("Check your passwords","OK");
      setTimeout( () => { this.snackBar.dismiss() }, 2000 );
      return
    }

    /** Add User Logic */

    this.username = '';
    this.password = '';
    this.repeatPassword = '';
    
  }

  openSnackBar() {
    
  }
}

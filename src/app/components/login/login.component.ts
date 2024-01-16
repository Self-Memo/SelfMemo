import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private router: Router){}

  ngOnInit(): void {
    // Intentionally blank
    //this.username= 'admin';
    //this.onLoginClick();
  }

  onLoginClick() {
    switch (this.username) {
      case "admin":
        sessionStorage.setItem('token', 'admin')
        this.router.navigate(['/admin-page']);
        break;
      case "user":
        sessionStorage.setItem('token', 'user')
        this.router.navigate(['/user-page']);
        break;

      default:
        break;
    }
  }
}

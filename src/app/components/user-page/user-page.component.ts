import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {

  constructor(private router: Router) { }

  addReminder(){
    this.router.navigate(['/add-reminder']);
  }
}

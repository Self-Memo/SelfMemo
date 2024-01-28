import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { AddReminderComponent } from './components/add-reminder/add-reminder.component';
import { AuthAdminGuard } from './guards/auth-admin.guard';
import { AuthUserGuard } from './guards/auth-user.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'admin-page', component: AdminPageComponent, canActivate:[AuthAdminGuard]},
  { path: 'user-page', component: UserPageComponent, canActivate:[AuthUserGuard]},
  { path: 'add-reminder', component: AddReminderComponent, canActivate:[AuthUserGuard]},
  { path: '**', redirectTo: 'login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

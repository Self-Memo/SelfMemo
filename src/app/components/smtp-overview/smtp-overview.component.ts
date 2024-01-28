import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { SMPT } from 'src/app/models/SMTP';
import { SmtpService } from 'src/app/services/smtp.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-smtp-overview',
  templateUrl: './smtp-overview.component.html',
  styleUrls: ['./smtp-overview.component.scss']
})
export class SmtpOverviewComponent implements OnInit {

  smptSettings: SMPT = new SMPT();

  constructor(private snackbarService: SnackbarService, private smtpService: SmtpService){}

  async ngOnInit(): Promise<void> {
     let smtpSettingRequest = this.smtpService.getSmtpSettings();
    await lastValueFrom(smtpSettingRequest)
      .catch((error: HttpErrorResponse) => {
        console.log("error: ", error);
        this.snackbarService.showSnackbar(2, "Loading of SMTP settings failed!");
        return;
      })
      .then(val => {
        delete val.smtpSettings['id'];
        this.smptSettings = (val.smtpSettings ? (val.smtpSettings) : new SMPT());
      });
  }

  async updateSMTPClick() {
    let smtpSettingRequest = this.smtpService.setSmtpSettings(this.smptSettings);
    await lastValueFrom(smtpSettingRequest)
      .catch((error: HttpErrorResponse) => {
        console.log("error: ", error);
        this.snackbarService.showSnackbar(2, "Updating SMTP settings failed!");
        return;
      })
      .then(val => {
        delete val.smtpSettings['id'];
        this.smptSettings = (val.smtpSettings ? val.smtpSettings : new SMPT());
      });
  }

}

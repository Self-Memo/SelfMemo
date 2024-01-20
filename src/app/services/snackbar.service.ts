import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  showSnackbar(sec: number, text:string) {
      this.snackBar.open(text,"OK");
      setTimeout( () => { this.snackBar.dismiss() }, sec * 1000 );
    }
}

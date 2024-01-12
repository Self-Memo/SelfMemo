import { Component } from '@angular/core';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss']
})
export class UtilitiesComponent {

  static rangeGenerator(min: number, max: number): number[]{
    let result : number[] = [];
    for (let i = min; i <= max; i++){
      result.push(i);
    }
    return result;
  }
}

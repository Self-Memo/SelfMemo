import { Component } from '@angular/core';
import { Week } from 'src/app/models/Week';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss']
})
export class UtilitiesComponent {

  static rangeGenerator(min: number, max: number, steps: number): number[] {
    let result: number[] = [];
    for (let i = min; i <= max; i = i + steps) {
      result.push(i);
    }
    return result;
  }

  static booleanToNumber(boolean: Boolean): number {
    if (boolean) {
      return 1;
    } else {
      return 0;
    }
  }

  static numberToBoolean(number: number): Boolean {
    if (number == 0) {
      return false;
    } else {
      return true;
    }
  }

  static weekToBitMask(week: Week): string {
    let result = '';
    result += String(this.booleanToNumber(week.monday));
    result += String(this.booleanToNumber(week.tuesday));
    result += String(this.booleanToNumber(week.wednesday));
    result += String(this.booleanToNumber(week.thursday));
    result += String(this.booleanToNumber(week.friday));
    result += String(this.booleanToNumber(week.saturday));
    result += String(this.booleanToNumber(week.sunday));

    return result;
  }

  static bitMaskToWeek(bitMaskToWeek: string): Week {
    let result: Week = new Week();
    result.monday = this.numberToBoolean(Number(bitMaskToWeek.at(0)))
    result.tuesday = this.numberToBoolean(Number(bitMaskToWeek.at(1)))
    result.wednesday = this.numberToBoolean(Number(bitMaskToWeek.at(2)))
    result.thursday = this.numberToBoolean(Number(bitMaskToWeek.at(3)))
    result.friday = this.numberToBoolean(Number(bitMaskToWeek.at(4)))
    result.saturday = this.numberToBoolean(Number(bitMaskToWeek.at(5)))
    result.sunday = this.numberToBoolean(Number(bitMaskToWeek.at(6)))
    return result;
  }
}

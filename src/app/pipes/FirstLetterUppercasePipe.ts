import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'firstLetterUppercase' })
export class FirstLetterUppercasePipe implements PipeTransform {
    transform(string: string): string {
        string = string.toLocaleLowerCase();
        string = string.charAt(0).toUpperCase() + string.slice(1);
        string = string.replace('_', '');
        return string;
    }
}

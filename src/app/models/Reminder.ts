import { EmailType } from "./EmailTypeEnum";
import { MonthEnum } from "./MonthEnum";
import { Week } from "./Week";

export class Reminder {
    type?: EmailType;
    week?: Week;
    month?: MonthEnum;
    dayOfMonth?: number;
    nextEvent?: Date;
    additionalNotes?:string;
    subject?:string;
}

import { EmailType } from "./EmailTypeEnum";
import { MonthEnum } from "./MonthEnum";
import { Week } from "./Week";

export class Reminder {
    user?:string;
    type?: EmailType;
    daysOfWeekBitMask?: string;
    month?: number;
    dayOfMonth?: number;
    hour?: number;
    minute?: number;
    additionalNotes?:string;
    subject?:string;
    nextEvent?: Date;
}

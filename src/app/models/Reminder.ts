import { EmailType } from "./EmailTypeEnum";

export class Reminder {
    id?: string;
    active?: boolean = true;
    user_id?: string;
    type?: EmailType;
    daysOfWeekBitMask?: string;
    month?: number;
    dayOfMonth?: number;
    hour?: number;
    minute?: number;
    additionalNotes?: string;
    subject?: string;
    nextEvent?: Date;
}

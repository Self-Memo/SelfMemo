import { EmailType } from "./EmailTypeEnum";

export class ListEntry {
    active!: Boolean;
    subject!: String;
    type!: EmailType;
    createdDateTime!: Date;
  }
  
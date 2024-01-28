export class SMPT {
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  secure?: boolean = true;
  from_email?: string;
  from_name?: string;
}

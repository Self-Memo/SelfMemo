export class SMPT {
  id?:number;
  host?:string;
  port?:number; 
  username?:string; 
  password?:string; 
  secure?:boolean = true; 
  from_email?:string; 
  from_name?:string;
}

import { IsEmail, IsEmpty } from "class-validator";

export class AccountDto{
    
 
    email?: string;
    name?:string;
    username?:string;
    password?:string;
}
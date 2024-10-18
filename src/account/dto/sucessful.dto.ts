


import { Type } from "class-transformer";
import { IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class Error{
    @IsOptional()
    @Type(()=>Number)
    @IsNumber()
    username_error:number;
    @IsOptional()
    @Type(()=>Number)
    @IsNumber()
    name_error: number;
    @IsOptional()
    @Type(()=>Number)
    @IsNumber()
    email_error: number;
    @IsOptional()
    @Type(()=>Number)
    @IsNumber()
    password_error:number;
}

export class SuccesfulDto{
    @IsNotEmpty()
    @Type(()=>Number)
    @IsNumber()
    success:number;

    @IsOptional()
    error:Error;
    
}
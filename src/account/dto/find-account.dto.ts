import { PartialType } from '@nestjs/mapped-types';
import { AccountDto } from './account.dto';
import { IsEmpty, IsNotEmpty, isNotEmptyObject, IsOptional, IsString, Validate, ValidationArguments } from 'class-validator';
import { Type } from 'class-transformer';
import { isEmpty } from 'rxjs';




export class FindAccountDto{
    
    
    @IsOptional()
    @IsString() 
    email?: string;
    @IsOptional()
    @IsString()
    name?:string;
    @IsOptional()
    @IsString()
    username?:string;
    @IsEmpty()
    password?:string;
   
 
    
    
}

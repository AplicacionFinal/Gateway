import { PartialType } from '@nestjs/mapped-types';
import { AccountDto } from './account.dto';
import { IsEmpty, IsNotEmpty } from 'class-validator';


export class CreateAccountDto extends PartialType(AccountDto) {
    
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    name:string;
    @IsNotEmpty()
    username:string;
    @IsNotEmpty()
    password:string;

}

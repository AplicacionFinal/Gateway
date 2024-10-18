import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { CreateAccountDto } from './dto/create-account.dto';
import { AccountService } from './account.service';
import { FindAccountDto } from './dto/find-account.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) { }

  @Post('register')
  register(@Body() createAccountDto: CreateAccountDto) {

    return this.accountService.create(createAccountDto);
  }

  @Post('find')
  find(@Body() findAccountDto: FindAccountDto) {
    console.log(findAccountDto);
    return this.accountService.find(findAccountDto);
  }

  @Post('exist')
  exist(@Body() findAccountDto: FindAccountDto) {
    console.log(findAccountDto);
    const success = this.accountService.exists(findAccountDto);
    return success;
  }


}

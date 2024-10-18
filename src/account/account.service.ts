import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, firstValueFrom, throwError } from 'rxjs';
import { envs } from 'src/config/envs';
import { FindAccountDto } from './dto/find-account.dto';

@Injectable()
export class AccountService {

  constructor(@Inject(envs.NATS_SERVICE) private readonly client: ClientProxy) {

  }

  async create(createAccountDto: CreateAccountDto) {
    try {
      console.log(createAccountDto);
      const account = await firstValueFrom(this.client.send({ cmd: 'register_account' }, createAccountDto));
      return account;

    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async find(findAccountDto: FindAccountDto) {

    try {
      const account = await firstValueFrom(this.client.send({ cmd: 'find_account' }, findAccountDto));
      
      return account;


    } catch (error) {
      throw new BadRequestException(error);
    }

  }


  async exists(findAccountDto: FindAccountDto) {

    try {
      const success = await firstValueFrom(this.client.send({ cmd: 'exits_account' }, findAccountDto));
      console.log(success);
      return success;

    } catch (error) {
      throw new BadRequestException(error);
    }

  }

}

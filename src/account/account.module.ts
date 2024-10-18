import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { envs } from 'src/config/envs';
import { AccountService } from './account.service';

@Module({
  imports:[
    ClientsModule.register([
      {name: envs.NATS_SERVICE,transport:Transport.NATS,options:{
        servers:envs.NATS_SERVERS,
      }},
    ]),
  ],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}

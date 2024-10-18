import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { JugadorModule } from './jugador/jugador.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [ JugadorModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

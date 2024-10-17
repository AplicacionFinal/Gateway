import { envs } from './config/envs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(envs.PORT);

  Logger.log(`Gateway listening on PORT: ${envs.PORT}`);


}
bootstrap();

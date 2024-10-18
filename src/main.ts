import { envs } from './config/envs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(
    {
      origin: '*',
      methods: 'GET,POST,PUT,DELETE',
      allowedHeaders: 'Content-Type, Authorization',
    }
  )

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // solo se permiten los campos que están definidos explícitamente en el DTO.
    forbidUnknownValues: true, // prohíbe valores o campos que no se hayan definido en el DTO.
    transform: true,
    //para habilitar la transformación
  }))

  await app.listen(envs.PORT);

  Logger.log(`Gateway listening on PORT: ${envs.PORT}`);


}
bootstrap();

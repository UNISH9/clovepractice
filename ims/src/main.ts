import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  //applications instance is created here
 const app = await NestFactory.create(AppModule);

  //register middleware
  app.useGlobalPipes(new ValidationPipe());

  //application is started here
  await app.listen(5000);

}
bootstrap();

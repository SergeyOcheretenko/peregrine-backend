import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(port: number | string) {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}

bootstrap(process.env.PORT || 3000);

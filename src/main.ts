import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './common/middleware/logger.middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
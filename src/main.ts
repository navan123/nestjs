import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initDocumentation } from './documentation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();

  initDocumentation(app, {
    version: '1.0',
    description: 'navan api',
    title: 'navan api',
    endpoint: '/api/v1',
  });
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AdminModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);

  const options = new DocumentBuilder()
    .setTitle('后台管理系统API')
    .setDescription('供后台管理系统调用的服务端api')
    .setVersion('1.0')
    // .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  console.log('admin project is running...http://localhost:3000/api-docs');
}
bootstrap();

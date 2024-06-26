import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata"


const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`App started. Listening on port ${port}`);
}
bootstrap().catch((err) => {
  console.log(`Fatal error during initialization:`, err);
  process.exit(1);
});

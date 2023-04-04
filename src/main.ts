// Libs
import { NestFactory } from '@nestjs/core';
// Modules
import { AppModule } from './app.module';

const start = async () => {
  try {
    const PORT = process.env.PORT || 5005;
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();

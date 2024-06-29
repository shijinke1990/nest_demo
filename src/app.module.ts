import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APP_NAME',
      useValue: ['NestJS', 'Express', 'TypeScript', 'Node.js', 'JavaScript'],
    },
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { Global } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

@Injectable()
@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: 'Config',
      useValue: {
        appName: 'NestJS',
        appVersion: '1.0.0',
      },
    },
  ],
  exports: [
    {
      provide: 'Config',
      useValue: {
        appName: 'NestJS',
        appVersion: '1.0.0',
      },
    },
  ],
})
export class ConfigModule {}

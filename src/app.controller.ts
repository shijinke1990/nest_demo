import { Controller, Get } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('APP_NAME') private readonly appName: string[],
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('appName')
  getAppName(): string {
    return this.appName.join(', ');
  }
}

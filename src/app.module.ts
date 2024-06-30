import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BannerModule } from './banner/banner.module';
import { SettingModule } from './setting/setting.module';

@Module({
  imports: [UserModule, BannerModule, SettingModule],
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

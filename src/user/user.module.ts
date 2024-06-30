// user.module.ts
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SettingService } from '../setting/setting.service'; // 假设SettingService和UserService在同一目录

@Module({
  controllers: [UserController],
  providers: [UserService, SettingService], // 添加SettingService作为provider
  exports: [UserService],
})
export class UserModule {}

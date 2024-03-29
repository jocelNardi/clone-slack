import { Module } from '@nestjs/common';
import { UsersApplicationService } from './application/users/users.application.service';
import { ConfigModule } from './infrastructure/config/config.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule, ConfigModule, AuthModule],
  providers: [UsersApplicationService],
})
export class AppModule {}

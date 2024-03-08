import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({ secret: process.env.SECRET_KEY }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

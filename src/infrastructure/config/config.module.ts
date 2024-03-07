import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigModule as Conf } from '@nestjs/config';
import typeOrmConfig from './databases/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    Conf.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  providers: [ConfigService],
})
export class ConfigModule {}

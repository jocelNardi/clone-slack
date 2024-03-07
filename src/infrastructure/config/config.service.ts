import { Injectable } from '@nestjs/common';
import { ConfigService as Config } from '@nestjs/config';
import { DatabaseConfig } from 'src/interface/database/database.interface';

@Injectable()
export class ConfigService implements DatabaseConfig {
  constructor(private configService: Config) {}

  getDatabaseHost = (): string =>
    this.configService.get<string>('DATABASE_HOST');

  getDatabaseUser = (): string =>
    this.configService.get<string>('DATABASE_USER');

  getDatabasePassword = (): string =>
    this.configService.get<string>('DATABASE_PASSWORD');

  getDatabaseName = (): string => this.configService.get<string>('DATABASE_DB');

  getDatabasePort = (): number =>
    this.configService.get<number>('DATABASE_PORT');
}

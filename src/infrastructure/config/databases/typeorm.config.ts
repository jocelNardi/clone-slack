// export default () => ({
//   database: {
//     host: process.env.DATABASE_HOST,
//     port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     synchronize: true,
//     autoLoadEntities: true,
//   },
// });

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'dbNest',
  synchronize: true,
  autoLoadEntities: true,
};

export default typeOrmConfig;

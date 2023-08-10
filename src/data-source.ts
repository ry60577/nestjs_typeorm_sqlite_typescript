import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from './users/user.entity';

const options: DataSourceOptions = {
  type: 'sqlite',
  database: './database/testDB',
  entities: [User],
  migrations: ['./src/migrations/1691576668422-UserSeeder.ts'],
};

export const dataSource = new DataSource(options);

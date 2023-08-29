import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './api/users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const testDBModule = TypeOrmModule.forRoot({
  type: 'sqlite',
  database: './database/testDB',
  synchronize: true,
  autoLoadEntities: true,
});

@Module({
  imports: [testDBModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

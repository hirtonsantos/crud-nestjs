import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { usersModule } from './users/users.module';

const defaultOptions = {
  type: 'postgres',
  port: 5432,
  username: 'hirton',
  password: '1987',
  database: 'users_db',
  host: 'localhost', // locahost
};

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...defaultOptions,
      synchronize: true,
      autoLoadEntities: true,
    }),
    usersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

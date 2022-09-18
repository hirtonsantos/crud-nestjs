import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialMedia } from './entity/socialMidia.entity';
import { User } from './entity/users.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, SocialMedia])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class usersModule {}

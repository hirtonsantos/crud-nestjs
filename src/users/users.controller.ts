import { Body, Controller, Get, Post } from '@nestjs/common';
import { User, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  findAllUsers() {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() body: User) {
    console.log(body);
    return this.createUser(body);
  }
}

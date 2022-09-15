import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  findAllUsers() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOneUser(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }

  @Post()
  createUser(@Body() body: User) {
    return this.userService.create(body);
  }

  @Patch(':id')
  updateUser(@Body() Body: User, @Param('id') id: string) {
    return this.userService.update(Body, Number(id));
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.delete(Number(id));
  }
}

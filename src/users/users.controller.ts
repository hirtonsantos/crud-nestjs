import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.ts';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  findAllUsers() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOneUser(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Patch(':id')
  updateUser(@Body() user: UpdateUserDto, @Param('id') id: string) {
    return this.userService.update(user, id);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}

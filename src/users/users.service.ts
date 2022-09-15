import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.ts';

export interface User {
  name?: string;
  email?: string;
  id?: number;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      name: 'hirton silva',
      email: 'hirtonsilva@gmail.com',
      id: 1,
    },
  ];

  create(user: CreateUserDto) {
    const lastUser = this.users.slice(-1)[0];
    if (!lastUser) {
      user.id = 0;
    } else {
      user.id = lastUser.id + 1;
    }
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  update(newUser: any, id: number) {
    const user = this.users.findIndex((user) => user.id === id);
    if (user === -1) {
      throw new NotFoundException();
    }
    newUser.id = this.users[user].id;
    this.users[user] = newUser;
  }

  delete(id: number) {
    const user = this.users.findIndex((user) => user.id === id);
    if (user === -1) {
      throw new NotFoundException();
    }
    this.users.splice(user, 1);
  }
}

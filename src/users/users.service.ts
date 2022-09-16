import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(data) {
    const newUser = Object.assign(new User(), data);
    this.usersRepository.create(newUser);
    await this.usersRepository.save(newUser);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(newUser: any, id: string) {
    await this.usersRepository.update(id, { ...newUser });
  }

  async delete(id: string): Promise<void> {
    this.usersRepository.delete(id);
  }
}

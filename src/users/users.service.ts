import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto.ts';
import { SocialMedia } from './entity/socialMidia.entity';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(SocialMedia)
    private socialMediaRepository: Repository<SocialMedia>,
  ) {}

  async create(data: CreateUserDto) {
    const socialMedias = await Promise.all(
      data.socialMedias.map((name: string) =>
        this.preloadsocialMediaByName(name),
      ),
    );

    const user = this.usersRepository.create({
      ...data,
      socialMedias,
    });

    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    /*
    return this.socialMediaRepository.find({
      relations: ['users'],
    });
    */
    return this.usersRepository.find({
      relations: ['socialMedias'],
    });
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

  private async preloadsocialMediaByName(name: string): Promise<SocialMedia> {
    const socialMedia = await this.socialMediaRepository.findOne({
      where: { name },
    });

    if (socialMedia) {
      return socialMedia;
    }

    return this.socialMediaRepository.create({ name });
  }
}

import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './users.entity';
import { v4 as uuid } from 'uuid';

@Entity({
  name: 'SocialMedia',
})
export class SocialMedia {
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => User, (user) => user.socialMedias)
  users: User[];
}

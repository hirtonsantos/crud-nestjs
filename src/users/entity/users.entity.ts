import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { SocialMedia } from './socialMidia.entity';

@Entity({
  name: 'user',
})
export class User {
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({
    type: 'varchar',
  })
  username: string;

  @Column({
    type: 'varchar',
    length: 200,
  })
  email: string;

  @JoinTable({
    name: 'users_socialMedia',
  })
  @ManyToMany(() => SocialMedia, (socialMedia) => socialMedia.users)
  socialMedias: SocialMedia[];
}

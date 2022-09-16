import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class user {
  @PrimaryColumn({
    type: 'uuid',
  })
  id: string;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 200,
  })
  email: string;
}

import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

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
  name: string;

  @Column({
    type: 'varchar',
    length: 200,
  })
  email: string;
}

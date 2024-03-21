import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'rooms' })
export class RoomsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  usersId: string;

  @Column()
  name: string;
}

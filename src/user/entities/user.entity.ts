import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  avatar: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ enum: ['user', 'admin'], type: 'enum', default: 'user' })
  role: string;
}

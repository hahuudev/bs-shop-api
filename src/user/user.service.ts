import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    public readonly userRepo: Repository<UserEntity>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    const user = new UserEntity();
    user.fullname = createUserInput.fullname;
    user.email = createUserInput.email;
    user.avatar = createUserInput.avatar;

    return await this.userRepo.save(user);
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.userRepo.find();
    return users;
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({ where: { id: id } });
    return user;
  }

  async update(user: UpdateUserInput) {
    await this.userRepo.update(user.id, user);

    return {
      message: 'Update user successfully',
      data: user.id,
    };
  }

  async remove(id: number) {
    await this.userRepo.delete(id);
    return {
      message: 'Delete user successfully',
      data: id,
    };
  }
}

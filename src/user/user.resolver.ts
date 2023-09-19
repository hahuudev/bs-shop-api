import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UserSchema } from './user.schema';
import { UpdateUserInput } from './dto/update-user.input';
import { Response } from 'src/Core/core.entity';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserSchema, { name: 'newUser' })
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [UserSchema], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => UserSchema, { name: 'getUserById' })
  findOne(@Args('id') id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => Response, { name: 'updateUser' })
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput);
  }

  @Mutation(() => Response, { name: 'deleteUser' })
  remove(@Args('id') id: number) {
    return this.userService.remove(id);
  }
}

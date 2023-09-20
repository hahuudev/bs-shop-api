import { Field, ObjectType } from '@nestjs/graphql';
import { UserSchema } from 'src/user/user.schema';

@ObjectType()
export class LoginSchema {
  @Field(() => UserSchema)
  userLogin: UserSchema;
}

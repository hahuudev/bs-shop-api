import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserSchema {
  @Field(() => Int)
  id: number;

  @Field()
  fullname: string;

  @Field()
  avatar: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  role: string;
}

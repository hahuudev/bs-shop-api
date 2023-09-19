import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  fullname: string;

  @Field()
  avatar: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

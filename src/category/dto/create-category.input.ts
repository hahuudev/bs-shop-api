import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field()
  name: string;

  @Field()
  avatar: string;
}

import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CategorySchema {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  avatar: string;
}

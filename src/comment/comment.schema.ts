import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommentSchema {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field()
  content: string;

  @Field(() => Int)
  productId: number;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}

import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  @Field(() => Int)
  userId: number;

  @Field()
  content: string;

  @Field(() => Int)
  productId: string;
}

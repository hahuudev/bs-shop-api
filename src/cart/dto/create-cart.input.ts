import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCartInput {
  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  amount: number;

  @Field(() => Int)
  userId: number;
}

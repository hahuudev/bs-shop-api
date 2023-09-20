import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CartSchema {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  amount: number;

  @Field(() => Int)
  userId: number;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}

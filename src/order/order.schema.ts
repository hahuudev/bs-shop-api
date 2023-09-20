import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class OrderSchema {
  @Field(() => Int)
  totalPrice: number;
}

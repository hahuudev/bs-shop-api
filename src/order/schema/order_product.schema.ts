import { Field, Int, ObjectType } from '@nestjs/graphql';
import { OrderSchema } from './order.schema';

@ObjectType()
export class OrderProductSchema {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  orderId: number;

  @Field(() => Int)
  amount: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => OrderSchema)
  order: OrderSchema;
}

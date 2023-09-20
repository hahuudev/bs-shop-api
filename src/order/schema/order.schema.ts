import { Field, Int, ObjectType } from '@nestjs/graphql';
import { OrderProductSchema } from './order_product.schema';

@ObjectType()
export class OrderSchema {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  address: string;

  @Field(() => Int)
  totalPrice: number;

  @Field(() => Boolean)
  status: string;

  @Field()
  notes: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;

  @Field(() => [OrderProductSchema])
  orderProducts: OrderProductSchema[];
}

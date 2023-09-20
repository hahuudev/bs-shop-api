import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { OrderProductSchema } from '../schema/order_product.schema';

@InputType()
export class CreateOrderInput {
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

  // @Field(() => [OrderProductSchema])
  // @IsNotEmpty({ each: true })
  // orderProducts: OrderProductSchema[];
}

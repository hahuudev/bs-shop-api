import { Field, InputType, Int } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderProductInput } from './create-order_product.input';

@InputType()
export class UpdateOrderProductInput extends PartialType(
  CreateOrderProductInput,
) {
  @Field(() => Int)
  id: number;
}

import { Field, InputType, Int } from '@nestjs/graphql';
import { CreateOrderInput } from './create-order.input';
import { PartialType } from '@nestjs/mapped-types';

@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {
  @Field(() => Int)
  id: number;
}

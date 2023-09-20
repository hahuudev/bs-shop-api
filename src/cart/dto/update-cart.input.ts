import { Field, InputType, Int } from '@nestjs/graphql';
import { CreateCartInput } from './create-cart.input';
import { PartialType } from '@nestjs/mapped-types';

@InputType()
export class UpdateCartInput extends PartialType(CreateCartInput) {
  @Field(() => Int)
  id: number;
}

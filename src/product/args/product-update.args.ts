import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { AddProductArgs } from './product-add.args';

@InputType()
export class UpdateProductArgs extends PartialType(AddProductArgs) {
  @Field(() => Int)
  id: number;
}

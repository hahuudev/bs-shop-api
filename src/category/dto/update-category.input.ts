import { Field, InputType, Int } from '@nestjs/graphql';
import { CreateCategoryInput } from './create-category.input';
import { PartialType } from '@nestjs/mapped-types';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field(() => Int)
  id: number;
}

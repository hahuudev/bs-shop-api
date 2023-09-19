import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CategorySchema } from 'src/category/category.schema';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  priceOld: number;

  @Field()
  avatar: string;

  @Field(() => Int)
  categoryId: number;

  @Field(() => Int)
  amount: number;

  @Field(() => CategorySchema)
  category: CategorySchema;
}

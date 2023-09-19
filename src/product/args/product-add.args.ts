import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AddProductArgs {
  @Field()
  name: string;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  priceOld: number;

  @Field()
  description: string;

  @Field()
  avatar: string;

  @Field(() => Int)
  amount: number;

  @Field(() => Int)
  categoryId: number;
}

import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Response {
  @Field()
  message: string;
  @Field(() => Int)
  data: number;
}

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { OrderSchema } from './order.schema';
import { Response } from 'src/Core/core.entity';

@Resolver('Order')
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => OrderSchema, { name: 'neworder' })
  create(@Args('createorderInput') createorderInput: CreateOrderInput) {
    return this.orderService.create(createorderInput);
  }

  @Query(() => [OrderSchema], { name: 'orders' })
  findAll() {
    return this.orderService.findAll();
  }

  @Query(() => OrderSchema, { name: 'getOrderById' })
  findOne(@Args('id') id: number) {
    return this.orderService.findOne(id);
  }

  @Mutation(() => Response, { name: 'updateOrder' })
  update(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    return this.orderService.update(updateOrderInput);
  }

  @Mutation(() => Response, { name: 'deleteOrder' })
  remove(@Args('id') id: number) {
    return this.orderService.remove(id);
  }
}

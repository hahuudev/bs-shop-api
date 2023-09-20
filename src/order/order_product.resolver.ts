import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Response } from 'src/Core/core.entity';
import { CreateOrderProductInput } from './dto/create-order_product.input';
import { UpdateOrderProductInput } from './dto/update-order_product.input';
import { OrderSchema } from './schema/order.schema';
import { OrderProductService } from './service/order_product.service';

@Resolver('OrderProduct')
export class OrderProductResolver {
  constructor(private readonly orderProductService: OrderProductService) {}

  @Mutation(() => OrderSchema, { name: 'newOrderProduct' })
  create(
    @Args('createOrderProductInput')
    createOrderProductInput: CreateOrderProductInput,
  ) {
    return this.orderProductService.create(createOrderProductInput);
  }

  @Query(() => [OrderSchema], { name: 'orderProducts' })
  findAll() {
    return this.orderProductService.findAll();
  }

  @Query(() => OrderSchema, { name: 'getOrderProductById' })
  findOne(@Args('id') id: number) {
    return this.orderProductService.findOne(id);
  }

  @Mutation(() => Response, { name: 'updateOrderProduct' })
  update(
    @Args('updateOrderProductInput')
    updateOrderProductInput: UpdateOrderProductInput,
  ) {
    return this.orderProductService.update(updateOrderProductInput);
  }

  @Mutation(() => Response, { name: 'deleteOrderProduct' })
  remove(@Args('id') id: number) {
    return this.orderProductService.remove(id);
  }
}

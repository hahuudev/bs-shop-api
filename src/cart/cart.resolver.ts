import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CartService } from './cart.service';
import { CreateCartInput } from './dto/create-cart.input';
import { CartSchema } from './cart.schema';
import { UpdateCartInput } from './dto/update-cart.input';
import { Response } from 'src/Core/core.entity';

@Resolver('Cart')
export class CartResolver {
  constructor(private readonly cartService: CartService) {}

  @Mutation(() => CartSchema, { name: 'newcart' })
  create(@Args('createcartInput') createcartInput: CreateCartInput) {
    return this.cartService.create(createcartInput);
  }

  @Query(() => [CartSchema], { name: 'carts' })
  findAll() {
    return this.cartService.findAll();
  }

  @Query(() => CartSchema, { name: 'getcartById' })
  findOne(@Args('id') id: number) {
    return this.cartService.findOne(id);
  }

  @Mutation(() => Response, { name: 'updatecart' })
  update(@Args('updateCartInput') updateCartInput: UpdateCartInput) {
    return this.cartService.update(updateCartInput);
  }

  @Mutation(() => Response, { name: 'deletecart' })
  remove(@Args('id') id: number) {
    return this.cartService.remove(id);
  }
}

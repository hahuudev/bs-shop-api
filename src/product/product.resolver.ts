import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Response } from 'src/Core/core.entity';
import { AddProductArgs } from './args/product-add.args';
import { UpdateProductArgs } from './args/product-update.args';
import { Product } from './product.schema';
import { ProductService } from './product.service';
import { UseGuards } from '@nestjs/common';
import { IsAuthenGuard } from 'src/auth/is-authen.guard';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product, { name: 'newProduct' })
  createProduct(
    @Args('createProductInput') createProductInput: AddProductArgs,
  ) {
    return this.productService.create(createProductInput);
  }

  @Query(() => [Product], { name: 'products' })
  @UseGuards(IsAuthenGuard)
  getAllProducts() {
    return this.productService.findAll();
  }

  @Query(() => Product)
  getProductById(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.productService.findOne(id);
  }

  @Mutation(() => Response, { name: 'updateProduct' })
  updateProduct(@Args('product') product: UpdateProductArgs) {
    return this.productService.update(product);
  }

  @Mutation(() => Response, { name: 'deleteProduct' })
  deleteProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productService.remove(id);
  }
}

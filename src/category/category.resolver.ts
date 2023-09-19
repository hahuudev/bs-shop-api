import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategorySchema } from './category.schema';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Response } from 'src/Core/core.entity';

@Resolver('Category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => CategorySchema, { name: 'newCategory' })
  create(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ) {
    return this.categoryService.create(createCategoryInput);
  }

  @Query(() => [CategorySchema], { name: 'categories' })
  findAll() {
    return this.categoryService.findAll();
  }

  @Query(() => CategorySchema, { name: 'getCategoryById' })
  findOne(@Args('id') id: number) {
    return this.categoryService.findOne(id);
  }

  @Mutation(() => Response, { name: 'updateCategory' })
  update(
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ) {
    return this.categoryService.update(updateCategoryInput);
  }

  @Mutation(() => Response, { name: 'deleteCategory' })
  remove(@Args('id') id: number) {
    return this.categoryService.remove(id);
  }
}

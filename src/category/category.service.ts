import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryInput } from './dto/create-category.input';
import { CategoryEntity } from './entities/category.entity';
import { UpdateCategoryInput } from './dto/update-category.input';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    public readonly categoryRepo: Repository<CategoryEntity>,
  ) {}

  async create(createCategoryInput: CreateCategoryInput) {
    const category = new CategoryEntity();
    category.name = createCategoryInput.name;
    category.avatar = createCategoryInput.avatar;

    return await this.categoryRepo.save(category);
  }

  async findAll(): Promise<CategoryEntity[]> {
    const categorys = await this.categoryRepo.find();
    return categorys;
  }

  async findOne(id: number) {
    const category = await this.categoryRepo.findOne({ where: { id: id } });
    return category;
  }

  async update(category: UpdateCategoryInput) {
    await this.categoryRepo.update(category.id, category);

    return {
      message: 'Update category successfully',
      data: category.id,
    };
  }

  async remove(id: number) {
    await this.categoryRepo.delete(id);
    return {
      message: 'Delete category successfully',
      data: id,
    };
  }
}

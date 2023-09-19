import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddProductArgs } from './args/product-add.args';
import { UpdateProductArgs } from './args/product-update.args';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    public readonly prouductRepo: Repository<ProductEntity>,
  ) {}

  async create(createProductInput: AddProductArgs) {
    const product = new ProductEntity();

    product.name = createProductInput.name;
    product.description = createProductInput.description;
    product.price = createProductInput.price;
    product.priceOld = createProductInput.priceOld;
    product.amount = createProductInput.amount;
    product.avatar = createProductInput.avatar;

    return await this.prouductRepo.save(createProductInput);
  }

  async findAll(): Promise<ProductEntity[]> {
    const products = await this.prouductRepo
      .createQueryBuilder('product')
      .innerJoinAndSelect('product.category', 'category')
      .getMany();

    console.log(products);
    return products;
  }

  async findOne(id: number) {
    const product = await this.prouductRepo.findOne({ where: { id: id } });
    return product;
  }

  async update(product: UpdateProductArgs) {
    await this.prouductRepo.update(product.id, product);

    return {
      message: 'Update product successfully',
      data: product.id,
    };
  }

  async remove(id: number) {
    await this.prouductRepo.delete(id);
    return {
      message: 'Delete product successfully',
      data: id,
    };
  }
}

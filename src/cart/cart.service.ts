import { Injectable } from '@nestjs/common';
import { CartEntity } from './entities/cart.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCartInput } from './dto/create-cart.input';
import { UpdateCartInput } from './dto/update-cart.input';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    public readonly cartRepo: Repository<CartEntity>,
  ) {}

  async create(createCartInput: CreateCartInput) {
    const cart = new CartEntity();
    // cart.id = createcartInput.id;

    return await this.cartRepo.save(cart);
  }

  async findAll(): Promise<CartEntity[]> {
    const carts = await this.cartRepo.find();
    return carts;
  }

  async findOne(id: number) {
    const cart = await this.cartRepo.findOne({ where: { id: id } });
    return cart;
  }

  async update(cart: UpdateCartInput) {
    await this.cartRepo.update(cart.id, cart);

    return {
      message: 'Update cart successfully',
      data: cart.id,
    };
  }

  async remove(id: number) {
    await this.cartRepo.delete(id);
    return {
      message: 'Delete cart successfully',
      data: id,
    };
  }
}

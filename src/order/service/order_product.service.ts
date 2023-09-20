import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderProductEntity } from '../entities/orderProduct.entity';
import { CreateOrderProductInput } from '../dto/create-order_product.input';
import { UpdateOrderProductInput } from '../dto/update-order_product.input';

@Injectable()
export class OrderProductService {
  constructor(
    @InjectRepository(OrderProductEntity)
    public readonly OrderProductRepo: Repository<OrderProductEntity>,
  ) {}

  async create(createOrderProductInput: CreateOrderProductInput) {
    const newOrderProduct = this.OrderProductRepo.create(
      createOrderProductInput,
    );

    return await this.OrderProductRepo.save(newOrderProduct);
  }

  async findAll(): Promise<OrderProductEntity[]> {
    const orderProducts = await this.OrderProductRepo.find();
    return orderProducts;
  }

  async findOne(id: number) {
    const OrderProduct = await this.OrderProductRepo.findOne({
      where: { id: id },
    });
    return OrderProduct;
  }

  async update(OrderProduct: UpdateOrderProductInput) {
    await this.OrderProductRepo.update(OrderProduct.id, OrderProduct);

    return {
      message: 'Update OrderProduct successfully',
      data: OrderProduct.id,
    };
  }

  async remove(id: number) {
    await this.OrderProductRepo.delete(id);
    return {
      message: 'Delete OrderProduct successfully',
      data: id,
    };
  }
}

import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from '../dto/create-order.input';
import { UpdateOrderInput } from '../dto/update-order.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from '../entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    public readonly orderRepo: Repository<OrderEntity>,
  ) {}

  async create(createOrderInput: CreateOrderInput) {
    const order = this.orderRepo.create(createOrderInput);

    return await this.orderRepo.save(order);
  }

  async findAll(): Promise<OrderEntity[]> {
    const orders = await this.orderRepo
      .createQueryBuilder('orders')
      .leftJoin('orders.orderProducts', 'order_products')
      .getMany();
    return orders;
  }

  async findOne(id: number) {
    const Order = await this.orderRepo.findOne({ where: { id: id } });
    return Order;
  }

  async update(Order: UpdateOrderInput) {
    await this.orderRepo.update(Order.id, Order);

    return {
      message: 'Update Order successfully',
      data: Order.id,
    };
  }

  async remove(id: number) {
    await this.orderRepo.delete(id);
    return {
      message: 'Delete Order successfully',
      data: id,
    };
  }
}

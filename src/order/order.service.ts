import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    public readonly OrderRepo: Repository<OrderEntity>,
  ) {}

  async create(createOrderInput: CreateOrderInput) {
    const order = new OrderEntity();
    order.id = createOrderInput.id;

    return await this.OrderRepo.save(order);
  }

  async findAll(): Promise<OrderEntity[]> {
    const orders = await this.OrderRepo.find();
    return orders;
  }

  async findOne(id: number) {
    const Order = await this.OrderRepo.findOne({ where: { id: id } });
    return Order;
  }

  async update(Order: UpdateOrderInput) {
    await this.OrderRepo.update(Order.id, Order);

    return {
      message: 'Update Order successfully',
      data: Order.id,
    };
  }

  async remove(id: number) {
    await this.OrderRepo.delete(id);
    return {
      message: 'Delete Order successfully',
      data: id,
    };
  }
}

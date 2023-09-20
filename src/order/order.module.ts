import { Module } from '@nestjs/common';
import { OrderService } from './service/order.service';
import { OrderResolver } from './order.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { OrderProductResolver } from './order_product.resolver';
import { OrderProductService } from './service/order_product.service';
import { OrderProductEntity } from './entities/orderProduct.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, OrderProductEntity])],
  providers: [
    OrderResolver,
    OrderService,
    OrderProductResolver,
    OrderProductService,
  ],
})
export class OrderModule {}

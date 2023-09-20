import { CategoryEntity } from 'src/category/entities/category.entity';
import { OrderProductEntity } from 'src/order/entities/orderProduct.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, length: 255, default: 'DefaultValue' })
  avatar: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  priceOld: number;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column()
  categoryId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  category: CategoryEntity;

  @OneToOne(() => OrderProductEntity, (orderProduct) => orderProduct.productId)
  orderProduct: OrderProductEntity;
}

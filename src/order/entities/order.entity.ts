import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderProductEntity } from './orderProduct.entity';

@Entity({ name: 'orders' })
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  address: string;

  @Column()
  totalPrice: number;

  @Column({
    type: 'enum',
    enum: ['pending', 'delivering', 'success'],
    default: 'pending',
  })
  status: string;

  @Column({ default: 'thank you' })
  notes: string;

  // @Column()
  // paymentId: number;

  // @Column()
  // shippingMethod: string

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => OrderProductEntity, (orderProduct) => orderProduct.orderId)
  // @JoinColumn({name: })
  orderProducts: OrderProductEntity[];
}

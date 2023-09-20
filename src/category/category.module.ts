import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';
import { CategoryEntity } from './entities/category.entity';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { UserEntity } from 'src/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryEntity, UserEntity]),
    UserModule,
    JwtModule,
  ],
  providers: [CategoryResolver, CategoryService],
})
export class CategoryModule {}

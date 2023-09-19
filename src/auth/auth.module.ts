import { Module } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';

@Module({
  imports: [UserEntity],
  providers: [],
})
export class AuthModule {}

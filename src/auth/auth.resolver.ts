import { Resolver } from '@nestjs/graphql';
import { UserService } from 'src/user/user.service';
import { LoginInputType } from './dto/login.dto';

@Resolver()
export class AuthReslover {
  constructor(private userService: UserService) {}

  async login(userLogin: LoginInputType){
    // const user 

  }
}

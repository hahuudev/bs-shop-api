import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { IsAuthenGuard } from './is-authen.guard';

@Controller('auth')
export class AuthController {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  private async generateToken(data) {
    return await this.jwtService.signAsync(data, {
      privateKey: 'hahuudev',
    });
  }

  @Post('login')
  async login(@Body() user: LoginDto) {
    const { email, password } = user;
    const userDb = await this.userRepo.findOne({ where: { email } });

    if (!userDb) {
      throw new HttpException(
        'User chưa được đăng ký trên hệ thống',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const isPasswordMatch = await bcrypt.compare(password, userDb.password);

    if (!isPasswordMatch) {
      throw new HttpException(
        'Sai email hoặc password',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const accessToken = await this.generateToken({ id: userDb.id, email });
    const refeshToken = await this.generateToken({ id: userDb.id, email });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...obj } = userDb;
    return {
      data: obj,
      accessToken,
      refeshToken,
    };
  }

  @Post('register')
  async register(@Body() user: RegisterDto) {
    const { fullname, email, password } = user;
    const userDb = await this.userRepo.findOne({ where: { email } });

    if (userDb) {
      throw new HttpException(
        'User đã được đăng ký trên hệ thống',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = this.userRepo.create({
      fullname,
      email,
      password: passwordHash,
    });

    const result = await this.userRepo.save(newUser);

    const accessToken = this.generateToken({ id: result.id, email });
    const refeshToken = this.generateToken({ id: result.id, email });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...obj } = result;
    return {
      data: obj,
      accessToken,
      refeshToken,
    };
  }

  @Get('current-user')
  @UseGuards(IsAuthenGuard)
  async getUserLogin(@Request() req) {
    return { message: 'success', data: req.user };
  }
}

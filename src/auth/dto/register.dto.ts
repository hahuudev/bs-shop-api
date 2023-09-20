import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { LoginDto } from './login.dto';

export class RegisterDto extends LoginDto {
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(16)
  fullname: string;
}

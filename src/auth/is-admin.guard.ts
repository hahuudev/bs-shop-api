import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class IsAdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user: UserEntity = request.user;
    if (user.role !== 'admin') {
      throw new UnauthorizedException('Bạn không có quyền truy cập tài nguyên');
    }
    return true;
  }
}

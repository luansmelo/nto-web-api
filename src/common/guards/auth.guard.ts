import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { TokenValidationService } from 'src/modules/tokens/services/token-validation.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly tokenValidationService: TokenValidationService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.tokenValidationService.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    try {
      const decoded = this.tokenValidationService.verifyToken(token);
      request.user = decoded;
    } catch (err) {
      throw err;
    }

    return true;
  }
}

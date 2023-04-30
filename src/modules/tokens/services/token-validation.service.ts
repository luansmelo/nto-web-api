import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { TokenService } from 'src/modules/tokens/services/token.service';

@Injectable()
export class TokenValidationService {
  constructor(private readonly tokenService: TokenService) {}

  extractTokenFromHeader(request: any): string | null {
    const authorization = request.headers['authorization'];
    if (!authorization) return null;

    const [type, token] = authorization.split(' ');

    if (type.toLowerCase() !== 'bearer' || !token) {
      return null;
    }

    return token;
  }

  verifyToken(token: string) {
    try {
      return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (err) {
      if (err instanceof jwt.TokenExpiredError) {
        throw new UnauthorizedException('Expired token. Please login again.');
      } else {
        throw new UnauthorizedException('Invalid token');
      }
    }
  }

  isTokenExpired(decodedToken: any): boolean {
    return this.tokenService.isTokenExpired(decodedToken);
  }
}

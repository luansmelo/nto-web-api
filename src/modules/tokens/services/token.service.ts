import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class TokenService {
  constructor(private jwtService: JwtService) {}

  generateAccessToken(id: string): string {
    return this.jwtService.sign({ id });
  }

  // generateRefreshToken(id: string): string {
  //   return this.jwtService.sign(
  //     { id },
  //     {
  //       expiresIn: `${process.env.REFRESH_TOKEN_DURATION}d`,
  //     },
  //   );
  // }

  // generatePasswordResetToken(id: string): string {
  //   return this.jwtService.sign(
  //     { id },
  //     { expiresIn: `${process.env.PASSWORD_RESET_DURATION}h` },
  //   );
  // }

  // generateidActivationToken(id: string): string {
  //   return this.jwtService.sign(
  //     { id },
  //     { expiresIn: `${process.env.id_VERIFY_DURATION}h` },
  //   );
  // }

  decodeToken(token: string): jwt.JwtPayload {
    return jwt.decode(token) as jwt.JwtPayload;
  }

  isTokenExpired(decodedToken: jwt.JwtPayload): boolean {
    if (!decodedToken || !decodedToken.exp) {
      return true;
    }

    const currentTimestamp = Math.floor(Date.now() / 1000);
    return decodedToken.exp < currentTimestamp;
  }

  verifyToken(token: string): { id: string } {
    return this.jwtService.verify<{ id: string }>(token);
  }
}

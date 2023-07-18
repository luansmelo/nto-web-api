import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { LoginDTO } from 'src/modules/account/dto/login-account.dto';
import { AccountService } from 'src/modules/account/services/account.service';
import { TokenService } from 'src/modules/tokens/services/token.service';
import { CreateAuthDto } from '../dto/create-auth.dto';
// import { UpdateAuthDto } from '../dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly account: AccountService,
    private readonly token: TokenService,
  ) {}

  async create(createAuthDto: CreateAuthDto) {
    await this.account.handle(createAuthDto);
  }

  async login(data: LoginDTO) {
    const account = await this.account.validateUser(data.name, data.password);

    if (!account) {
      throw new BadRequestException('Invalid name or password');
    }

    const token = this.token.generateAccessToken(account.id);

    return { token };
  }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}

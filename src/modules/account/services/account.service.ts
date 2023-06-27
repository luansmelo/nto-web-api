import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/services/prisma.service';
import { AccountDTO } from '../dto/create-account.dto';
import { LoginDTO } from '../dto/login-account.dto';
import { UpdateAccountDto } from '../dto/update-account.dto';
import * as crypto from 'crypto';
import { Account } from '../entities/account.entity';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  async checkAccountExistsByNameAndEmail(name: string, email: string) {
    const account = await this.prisma.account.findFirst({
      where: { OR: [{ name }, { email }] },
    });

    if (account) {
      throw new BadRequestException('Account already exists');
    }
  }

  async handle(data: AccountDTO) {
    await this.checkAccountExistsByNameAndEmail(data.name, data.email);

    const hash = crypto.createHash('sha1').update(data.password).digest('hex');

    await this.prisma.account.create({
      data: {
        ...data,
        password: hash,
      },
    });
  }

  async validateUser(email: string, password: string): Promise<Account | null> {
    const account = await this.prisma.account.findUnique({ where: { email } });

    if (account) {
      const providedPasswordHash = crypto
        .createHash('sha1')
        .update(password)
        .digest('hex');
      if (account.password === providedPasswordHash) {
        return account;
      }
    }

    return null;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}

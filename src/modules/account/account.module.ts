import { Module } from '@nestjs/common';
import { AccountService } from './services/account.service';
import { AccountController } from './controller/account.controller';
import { PrismaService } from '../prisma/services/prisma.service';

@Module({
  controllers: [AccountController],
  providers: [AccountService, PrismaService],
  exports: [AccountService],
})
export class AccountModule {}

import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { PaymentModule } from './modules/payment/payment.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AccountModule } from './modules/account/account.module';
import { CharacterModule } from './modules/character/character.module';
import { ConfigModule } from '@nestjs/config';
import { GuildsModule } from './modules/guilds/guilds.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PaymentModule,
    PrismaModule,
    AccountModule,
    CharacterModule,
    GuildsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

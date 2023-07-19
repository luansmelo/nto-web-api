import { Module } from '@nestjs/common';
import { GuildsService } from './services/guilds.service';
import { GuildsController } from './dto/controllers/guilds.controller';
import { PrismaService } from '../prisma/services/prisma.service';

@Module({
  controllers: [GuildsController],
  providers: [GuildsService, PrismaService],
})
export class GuildsModule {}

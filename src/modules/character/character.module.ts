import { Module } from '@nestjs/common';
import { CharacterService } from './services/character.service';
import { CharacterController } from './controller/character.controller';
import { PrismaService } from '../prisma/services/prisma.service';

@Module({
  controllers: [CharacterController],
  providers: [CharacterService, PrismaService],
})
export class CharacterModule {}

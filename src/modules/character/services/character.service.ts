import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/services/prisma.service';
import { CreateCharacterDto } from '../dto/create-character.dto';
import { characters } from '../../../assets/characters/characters';

@Injectable()
export class CharacterService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(createCharacterDto: CreateCharacterDto) {
    const { name, vocation } = createCharacterDto;

    const existingPlayer = await this.prisma.player.findUnique({
      where: { name },
    });

    if (existingPlayer) {
      throw new ConflictException(`O nome ${name} já está em uso`);
    }

    const selectedVocation = characters.find((c) => c.vocation === vocation);
    if (!selectedVocation) {
      throw new NotFoundException(`A vocação com o id ${vocation} não existe`);
    }

    await this.prisma.player.create({
      data: {
        ...createCharacterDto,
        conditions: Buffer.alloc(0),
        looktype: selectedVocation.looktype,
      },
    });
  }

  getAllVocations() {
    return characters.map((character) => character.vocation);
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}

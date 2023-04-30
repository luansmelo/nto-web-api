import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CharacterService } from '../services/character.service';
import { CreateCharacterDto } from '../dto/create-character.dto';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common/decorators';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createCharacterDto: CreateCharacterDto) {
    return this.characterService.handle(createCharacterDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  getVocations() {
    return this.characterService.getAllVocations();
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateCharacterDto: UpdateCharacterDto,
  // ) {
  //   return this.characterService.update(+id, updateCharacterDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characterService.remove(+id);
  }
}

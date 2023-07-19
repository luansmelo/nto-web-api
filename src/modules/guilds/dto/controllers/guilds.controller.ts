import { Controller, Get, Param } from '@nestjs/common';
import { GuildsService } from '../../services/guilds.service';

@Controller('guilds')
export class GuildsController {
  constructor(private readonly guildsService: GuildsService) {}

  @Get()
  findAll() {
    return this.guildsService.getGuildDetail();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guildsService.getGuildDetailById(Number(id));
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/services/prisma.service';
import {
  IGuild,
  IGuildDetailResponse,
  IPlayersGuild,
} from '../interfaces/guilds-interface';

export interface IFormattedGuild
  extends Omit<IGuild, 'balance' | 'guild_logo'> {
  balance: string;
  guild_logo: string | null;
}

@Injectable()
export class GuildsService {
  constructor(private readonly prisma: PrismaService) {}

  async getGuildDetail() {
    const guilds = await this.prisma.guilds.findMany();

    return guilds.map(guild => ({
      ...guild,
      balance: guild.balance.toString(),
      guild_logo: guild.guild_logo ? guild.guild_logo.toString('base64') : null,
    }));
  }

  async getGuildDetailById(id: number): Promise<IGuildDetailResponse | null> {
    const guild = await this.prisma.guilds.findUnique({
      where: { id },
    });

    if (!guild) {
      return null;
    }

    const members = await this.prisma.guild_membership.findMany({
      where: { guild_id: id },
      include: { players: true },
    });

    const membersFormatted: IPlayersGuild[] = members.map(membership => ({
      id: membership.players.id,
      name: membership.players.name,
    }));

    return {
      guild: {
        id: guild.id,
        name: guild.name,
        ownerid: guild.ownerid,
        creationdata: guild.creationdata,
        motd: guild.motd,
        description: guild.description,
        guild_logo: guild.guild_logo
          ? guild.guild_logo.toString('base64')
          : null,
        create_ip: guild.create_ip,
        balance: guild.balance.toString(),
        last_execute_points: guild.last_execute_points,
        logo_name: guild.logo_name,
      },
      members: membersFormatted,
    };
  }
}

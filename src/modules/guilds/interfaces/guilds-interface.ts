export interface IGuild {
  id: number;
  name: string;
  ownerid: number;
  creationdata: number;
  motd: string;
  description: string;
  guild_logo: string | null;
  create_ip: number;
  balance: string;
  last_execute_points: number;
  logo_name: string;
}

export interface IPlayersGuild {
  id: number;
  name: string;
}

export interface IGuildDetailResponse {
  guild: IGuild;
  members: IPlayersGuild[];
}

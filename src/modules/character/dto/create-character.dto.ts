import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

export class CreateCharacterDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  world_id: number;

  @IsOptional()
  @IsInt()
  group_id?: number;

  @IsNotEmpty()
  @IsString()
  account_id: string;

  @IsOptional()
  @IsInt()
  vocation?: number;

  @IsOptional()
  @IsInt()
  sex?: number;

  @IsOptional()
  @IsInt()
  town_id?: number;

  @IsOptional()
  @IsInt()
  posx?: number;

  @IsOptional()
  @IsInt()
  posy?: number;

  @IsOptional()
  @IsInt()
  posz?: number;
}

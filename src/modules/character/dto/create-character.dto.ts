import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsOptional,
  IsNumber,
} from 'class-validator';

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
  @IsInt()
  account_id: number;

  @IsNotEmpty()
  @IsString()
  comment: string;

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

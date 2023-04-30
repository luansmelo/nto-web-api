import { IsString, IsEmail } from 'class-validator';

export class AccountDTO {
  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;
}

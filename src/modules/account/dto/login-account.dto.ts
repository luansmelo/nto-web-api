import { IsString, IsEmail } from 'class-validator';

export class LoginDTO {
  @IsEmail()
  name: string;

  @IsString()
  password: string;
}

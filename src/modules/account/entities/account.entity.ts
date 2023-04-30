import { PrismaService } from 'src/modules/prisma/services/prisma.service';

export class Account {
  id: string;
  name: string;
  password: string;
  salt: string;
  premdays: number;
  lastday: number;
  email: string;
  key: string;
  blocked: boolean;
  warnings: number;
  group_id: number;
  page_access: number;
  web_lastlogin: number;
  web_flags: number;
  email_hash: string;
  email_verified: boolean;
  email_new: string;
  email_new_time: number;
  rlname: string;
  location: string;
  country: string;
  created: number;
  email_code: string;
  email_next: number;
  premium_points: number;
  nickname: string;
  avatar: string;
  about_me: string;
  vote: number;
  premium_points_used: number;
}

import { PrismaService } from 'src/modules/prisma/services/prisma.service';

export class Account {
  id: number;
  name: string;
  password: string;
  premdays: number;
  lastday: number;
  email: string;
  key: string;
  blocked: boolean;
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
  vote: number;
}

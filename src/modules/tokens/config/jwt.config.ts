import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: process.env.ACCESS_TOKEN_SECRET,
  signOptions: { expiresIn: `${process.env.ACCESS_TOKEN_DURATION_MINUTES}h` },
}));

import { PartialType } from '@nestjs/mapped-types';
import { AccountDTO } from './create-account.dto';

export class UpdateAccountDto extends PartialType(AccountDTO) {}

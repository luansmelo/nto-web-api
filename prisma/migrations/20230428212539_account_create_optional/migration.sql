-- AlterTable
ALTER TABLE "accounts" ALTER COLUMN "salt" DROP NOT NULL,
ALTER COLUMN "premdays" DROP NOT NULL,
ALTER COLUMN "lastday" DROP NOT NULL,
ALTER COLUMN "key" DROP NOT NULL,
ALTER COLUMN "blocked" DROP NOT NULL,
ALTER COLUMN "warnings" DROP NOT NULL,
ALTER COLUMN "group_id" DROP NOT NULL,
ALTER COLUMN "web_lastlogin" DROP NOT NULL,
ALTER COLUMN "web_flags" DROP NOT NULL,
ALTER COLUMN "email_hash" DROP NOT NULL,
ALTER COLUMN "email_verified" DROP NOT NULL,
ALTER COLUMN "email_next" DROP NOT NULL,
ALTER COLUMN "premium_points" DROP NOT NULL,
ALTER COLUMN "vote" DROP NOT NULL,
ALTER COLUMN "premium_points_used" DROP NOT NULL;

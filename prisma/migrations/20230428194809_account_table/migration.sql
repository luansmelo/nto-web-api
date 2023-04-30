/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Account";

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL DEFAULT '',
    "premdays" INTEGER NOT NULL DEFAULT 0,
    "lastday" INTEGER NOT NULL DEFAULT 0,
    "email" TEXT NOT NULL,
    "key" TEXT NOT NULL DEFAULT '',
    "blocked" BOOLEAN NOT NULL DEFAULT false,
    "warnings" INTEGER NOT NULL DEFAULT 0,
    "group_id" INTEGER NOT NULL DEFAULT 1,
    "page_access" INTEGER,
    "web_lastlogin" INTEGER NOT NULL DEFAULT 0,
    "web_flags" INTEGER NOT NULL DEFAULT 0,
    "email_hash" TEXT NOT NULL DEFAULT '',
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "email_new" TEXT,
    "email_new_time" INTEGER,
    "rlname" TEXT,
    "location" TEXT,
    "country" TEXT NOT NULL DEFAULT '',
    "created" INTEGER,
    "email_code" TEXT,
    "email_next" INTEGER NOT NULL DEFAULT 0,
    "premium_points" INTEGER NOT NULL DEFAULT 0,
    "nickname" TEXT,
    "avatar" TEXT,
    "about_me" TEXT,
    "vote" INTEGER NOT NULL DEFAULT 0,
    "premium_points_used" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

/*
  Warnings:

  - You are about to drop the column `email` on the `CorpoMembership` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `CorpoMembership` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `CorpoMembership` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `CorpoMembership` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "CorpoMembership_email_key";

-- AlterTable
ALTER TABLE "CorpoMembership" DROP COLUMN "email",
DROP COLUMN "fullName",
DROP COLUMN "password",
DROP COLUMN "phone";

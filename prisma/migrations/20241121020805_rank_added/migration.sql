-- CreateEnum
CREATE TYPE "Ranks" AS ENUM ('None', 'Gold', 'Silver', 'Bronze');

-- AlterTable
ALTER TABLE "LisitingCritera" ADD COLUMN     "rank" "Ranks" NOT NULL DEFAULT 'None';

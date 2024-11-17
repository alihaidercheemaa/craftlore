/*
  Warnings:

  - Added the required column `listingCriteria` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `listingCriteria` to the `Institute` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Artisan" DROP CONSTRAINT "Artisan_listingCriteria_fkey";

-- AlterTable
ALTER TABLE "Business" ADD COLUMN     "listingCriteria" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Institute" ADD COLUMN     "listingCriteria" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Artisan" ADD CONSTRAINT "Artisan_listingCriteria_fkey" FOREIGN KEY ("listingCriteria") REFERENCES "LisitingCritera"("criteraId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_listingCriteria_fkey" FOREIGN KEY ("listingCriteria") REFERENCES "LisitingCritera"("criteraId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Institute" ADD CONSTRAINT "Institute_listingCriteria_fkey" FOREIGN KEY ("listingCriteria") REFERENCES "LisitingCritera"("criteraId") ON DELETE CASCADE ON UPDATE CASCADE;

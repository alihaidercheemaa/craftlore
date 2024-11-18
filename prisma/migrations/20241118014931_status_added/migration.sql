-- AlterTable
ALTER TABLE "Artisan" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'active';

-- AlterTable
ALTER TABLE "Business" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'active';

-- AlterTable
ALTER TABLE "Institute" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'active';

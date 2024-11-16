/*
  Warnings:

  - You are about to drop the `BusinessMembership` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "RegisterType" ADD VALUE 'BuyerMembership';
ALTER TYPE "RegisterType" ADD VALUE 'CorpoMembership';
ALTER TYPE "RegisterType" ADD VALUE 'SponsorMembership';

-- DropTable
DROP TABLE "BusinessMembership";

-- CreateTable
CREATE TABLE "BuyerMembership" (
    "buyerMemberId" TEXT NOT NULL,
    "buyerType" TEXT NOT NULL DEFAULT 'none',
    "businessName" TEXT NOT NULL DEFAULT 'none',
    "businessType" TEXT NOT NULL DEFAULT 'none',
    "taxId" TEXT NOT NULL DEFAULT 'none',
    "country" TEXT NOT NULL DEFAULT 'none',
    "website" TEXT NOT NULL DEFAULT 'none',
    "productInterest" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "orderVolume" TEXT NOT NULL DEFAULT 'none',
    "authentication" TEXT NOT NULL DEFAULT 'none',
    "traceability" TEXT NOT NULL DEFAULT 'none',
    "sustainability" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "source" TEXT NOT NULL DEFAULT 'none',
    "newsletter" BOOLEAN NOT NULL DEFAULT false,
    "specialRequirements" TEXT NOT NULL DEFAULT 'none',
    "terms" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BuyerMembership_pkey" PRIMARY KEY ("buyerMemberId")
);

-- CreateTable
CREATE TABLE "CorpoMembership" (
    "corpoMemberId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL DEFAULT 'none',
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL DEFAULT 'none',
    "password" TEXT NOT NULL DEFAULT 'none',
    "institutionName" TEXT NOT NULL DEFAULT 'none',
    "institutionType" TEXT NOT NULL DEFAULT 'none',
    "industry" TEXT NOT NULL DEFAULT 'none',
    "yearEstablished" INTEGER NOT NULL DEFAULT 0,
    "taxId" TEXT NOT NULL DEFAULT 'none',
    "primaryContact" TEXT NOT NULL DEFAULT 'none',
    "contactEmail" TEXT NOT NULL DEFAULT 'none',
    "contactPhone" TEXT NOT NULL DEFAULT 'none',
    "website" TEXT NOT NULL DEFAULT 'none',
    "headquartersAddress" TEXT NOT NULL DEFAULT 'none',
    "additionalLocations" TEXT NOT NULL DEFAULT 'none',
    "partnershipType" TEXT NOT NULL DEFAULT 'none',
    "partnershipGoals" TEXT NOT NULL DEFAULT 'none',
    "targetProducts" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "csrInterest" TEXT NOT NULL DEFAULT 'No',
    "csrInitiatives" TEXT NOT NULL DEFAULT 'none',
    "sustainabilityPractices" TEXT NOT NULL DEFAULT 'none',
    "businessLicense" TEXT NOT NULL DEFAULT 'none',
    "proofOfTaxID" TEXT NOT NULL DEFAULT 'none',
    "references" TEXT NOT NULL DEFAULT 'none',
    "engagementChannels" TEXT NOT NULL DEFAULT 'none',
    "customerDemographic" TEXT NOT NULL DEFAULT 'none',
    "brandMission" TEXT NOT NULL DEFAULT 'none',
    "specificRequirements" TEXT NOT NULL DEFAULT 'none',
    "challenges" TEXT NOT NULL DEFAULT 'none',
    "additionalComments" TEXT NOT NULL DEFAULT 'none',
    "terms" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CorpoMembership_pkey" PRIMARY KEY ("corpoMemberId")
);

-- CreateTable
CREATE TABLE "SponsorMembership" (
    "sponsorshipId" TEXT NOT NULL,
    "sponsorName" TEXT NOT NULL DEFAULT 'none',
    "contactPerson" TEXT NOT NULL DEFAULT 'none',
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL DEFAULT 'none',
    "socialLinks" TEXT NOT NULL DEFAULT 'none',
    "sponsorType" TEXT NOT NULL DEFAULT 'none',
    "industry" TEXT NOT NULL DEFAULT 'none',
    "sponsorshipGoal" TEXT NOT NULL DEFAULT 'none',
    "objectives" TEXT NOT NULL DEFAULT 'none',
    "focusArea" TEXT NOT NULL DEFAULT 'none',
    "tier" TEXT NOT NULL DEFAULT 'none',
    "budgetRange" TEXT NOT NULL DEFAULT 'none',
    "sponsorshipChannel" TEXT NOT NULL DEFAULT 'none',
    "eventInterest" TEXT NOT NULL DEFAULT 'No',
    "productCustomization" TEXT NOT NULL DEFAULT 'none',
    "csrInterest" TEXT NOT NULL DEFAULT 'No',
    "pastCSREfforts" TEXT NOT NULL DEFAULT 'none',
    "sustainabilityPractices" TEXT NOT NULL DEFAULT 'none',
    "brandingOptions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "socialHandles" TEXT NOT NULL DEFAULT 'none',
    "communicationChannel" TEXT NOT NULL DEFAULT 'none',
    "impactMetrics" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "reportFrequency" TEXT NOT NULL DEFAULT 'none',
    "publicUse" TEXT NOT NULL DEFAULT 'No',
    "specialRequirements" TEXT NOT NULL DEFAULT 'none',
    "additionalComments" TEXT NOT NULL DEFAULT 'none',
    "terms" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SponsorMembership_pkey" PRIMARY KEY ("sponsorshipId")
);

-- CreateIndex
CREATE UNIQUE INDEX "CorpoMembership_email_key" ON "CorpoMembership"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SponsorMembership_email_key" ON "SponsorMembership"("email");

-- AddForeignKey
ALTER TABLE "BuyerMembership" ADD CONSTRAINT "BuyerMembership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorpoMembership" ADD CONSTRAINT "CorpoMembership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SponsorMembership" ADD CONSTRAINT "SponsorMembership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

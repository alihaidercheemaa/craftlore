-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Pending', 'Actice');

-- CreateEnum
CREATE TYPE "InstitutionType" AS ENUM ('None', 'Governance', 'NGO', 'Training_Body', 'Educational_Body');

-- CreateEnum
CREATE TYPE "BusinessLevel" AS ENUM ('None', 'Large_Enterprice', 'Mid_sized_Business', 'Small_Business', 'Startup');

-- CreateEnum
CREATE TYPE "SkillLevel" AS ENUM ('None', 'Master', 'Skilled', 'Semi_Skilled', 'Apprentice');

-- CreateEnum
CREATE TYPE "RegisterType" AS ENUM ('None', 'Artisan', 'Business', 'Institution');

-- CreateEnum
CREATE TYPE "MarketType" AS ENUM ('None', 'Local', 'National', 'International');

-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL DEFAULT 'none',
    "phone" TEXT NOT NULL DEFAULT 'none',
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL DEFAULT 'none',
    "password" TEXT NOT NULL DEFAULT 'none',
    "registerType" "RegisterType" NOT NULL DEFAULT 'None',
    "status" "Status" NOT NULL DEFAULT 'Pending',

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Artisan" (
    "artisanId" TEXT NOT NULL,
    "craftSpecialty" TEXT NOT NULL DEFAULT 'none',
    "craftSkill" "SkillLevel" NOT NULL DEFAULT 'None',
    "craftExperience" INTEGER NOT NULL DEFAULT 0,
    "craftAward" TEXT NOT NULL DEFAULT 'none',
    "market" "MarketType" NOT NULL DEFAULT 'None',
    "documents" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "userId" TEXT NOT NULL,
    "listingCriteria" TEXT NOT NULL,

    CONSTRAINT "Artisan_pkey" PRIMARY KEY ("artisanId")
);

-- CreateTable
CREATE TABLE "Business" (
    "businessId" TEXT NOT NULL,
    "businessName" TEXT NOT NULL DEFAULT 'none',
    "businessEmail" TEXT NOT NULL,
    "businessAddress" TEXT NOT NULL DEFAULT 'none',
    "businessType" "BusinessLevel" NOT NULL DEFAULT 'None',
    "businessSold" TEXT NOT NULL DEFAULT 'none',
    "businessEmployee" INTEGER NOT NULL DEFAULT 0,
    "documents" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "userId" TEXT NOT NULL,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("businessId")
);

-- CreateTable
CREATE TABLE "Institute" (
    "instituteId" TEXT NOT NULL,
    "instituteName" TEXT NOT NULL DEFAULT 'none',
    "instituteEmail" TEXT NOT NULL,
    "instituteType" "InstitutionType" NOT NULL DEFAULT 'None',
    "instituteAddress" TEXT NOT NULL DEFAULT 'none',
    "instituteMission" TEXT NOT NULL DEFAULT 'none',
    "instituteRep" TEXT NOT NULL DEFAULT 'none',
    "repDes" TEXT NOT NULL DEFAULT 'none',
    "documents" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "userId" TEXT NOT NULL,

    CONSTRAINT "Institute_pkey" PRIMARY KEY ("instituteId")
);

-- CreateTable
CREATE TABLE "BusinessMembership" (
    "businessId" TEXT NOT NULL,
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

    CONSTRAINT "BusinessMembership_pkey" PRIMARY KEY ("businessId")
);

-- CreateTable
CREATE TABLE "LisitingCritera" (
    "criteraId" TEXT NOT NULL,
    "sourceOfMaterial" TEXT NOT NULL DEFAULT 'none',
    "craftingProcess" TEXT NOT NULL DEFAULT 'none',
    "sustainablePractices" BOOLEAN NOT NULL DEFAULT false,
    "sustainabledescription" TEXT NOT NULL DEFAULT 'none',
    "fairWage" BOOLEAN NOT NULL DEFAULT false,
    "genderSuport" BOOLEAN NOT NULL DEFAULT false,
    "womenPercentage" INTEGER NOT NULL DEFAULT 0,
    "workplaceuphold" BOOLEAN NOT NULL DEFAULT false,
    "workplaceDescription" TEXT NOT NULL DEFAULT 'none',
    "childLabour" BOOLEAN NOT NULL DEFAULT false,
    "fairTrade" BOOLEAN NOT NULL DEFAULT false,
    "fairtradeDoc" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "giHold" BOOLEAN NOT NULL DEFAULT false,
    "giNumber" TEXT NOT NULL DEFAULT 'none',
    "blockChain" BOOLEAN NOT NULL DEFAULT false,
    "blockChainDoc" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "ethics" BOOLEAN NOT NULL DEFAULT false,
    "qualityReview" BOOLEAN NOT NULL DEFAULT false,
    "profilePermission" BOOLEAN NOT NULL DEFAULT false,
    "complianceAcknowledgement" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "LisitingCritera_pkey" PRIMARY KEY ("criteraId")
);

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Business_businessEmail_idx" ON "Business"("businessEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Business_businessEmail_key" ON "Business"("businessEmail");

-- CreateIndex
CREATE INDEX "Institute_instituteEmail_idx" ON "Institute"("instituteEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Institute_instituteEmail_key" ON "Institute"("instituteEmail");

-- AddForeignKey
ALTER TABLE "Artisan" ADD CONSTRAINT "Artisan_listingCriteria_fkey" FOREIGN KEY ("listingCriteria") REFERENCES "LisitingCritera"("criteraId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artisan" ADD CONSTRAINT "Artisan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Institute" ADD CONSTRAINT "Institute_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateEnum
CREATE TYPE "InstitutionType" AS ENUM ('None', 'Governance', 'NGO', 'Training_Body', 'Educational_Body');

-- CreateEnum
CREATE TYPE "BusinessLevel" AS ENUM ('None', 'Large_Enterprice', 'Mid_sized_Business', 'Small_Business', 'Startup');

-- CreateEnum
CREATE TYPE "SkillLevel" AS ENUM ('None', 'Expert', 'Advanced', 'Beginner');

-- CreateEnum
CREATE TYPE "RegisterType" AS ENUM ('None', 'Artisan', 'Business', 'Institution', 'BuyerMembership', 'CorpoMembership', 'SponsorMembership');

-- CreateEnum
CREATE TYPE "MarketType" AS ENUM ('None', 'Local', 'National', 'International');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Pending', 'Actice');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'SUPERADMIN');

-- CreateEnum
CREATE TYPE "ListingRanks" AS ENUM ('None', 'Gold', 'Silver', 'Bronze');

-- CreateEnum
CREATE TYPE "SectionType" AS ENUM ('None', 'Quality', 'ProductLine', 'RawMaterial', 'Processing', 'ProductionMethod', 'Packaging', 'Transportation', 'Crafting', 'Installation', 'Finishing', 'Preparation', 'CookingProcess', 'PaintingAndLacquering', 'Embroidery', 'MaterialType', 'ProductionProcess', 'ProductCertifications', 'PlyType', 'TypeOfWeaving', 'DesignPatternTypes', 'DyeTypes', 'FinishingTechniques', 'ProductLineSize', 'ColorShades', 'Embellishments', 'Certifications', 'MaterialGrading', 'ProductTypesSizes', 'KnotPerInch', 'Dimensions', 'CarvingTechniques', 'ScaleOfCarving', 'FinishOptions', 'PatternTypes', 'FabricAndMaterial');

-- CreateTable
CREATE TABLE "AppliedJob" (
    "jobId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL DEFAULT 'none',
    "email" TEXT NOT NULL DEFAULT 'none',
    "job" TEXT NOT NULL DEFAULT 'none',
    "jobCode" TEXT NOT NULL DEFAULT 'none',
    "resume" TEXT NOT NULL DEFAULT 'none',
    "coverLetter" TEXT NOT NULL DEFAULT 'none',

    CONSTRAINT "AppliedJob_pkey" PRIMARY KEY ("jobId")
);

-- CreateTable
CREATE TABLE "Employ" (
    "employId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL DEFAULT 'none',
    "skills" TEXT NOT NULL DEFAULT 'none',
    "contribution" TEXT NOT NULL DEFAULT 'none',

    CONSTRAINT "Employ_pkey" PRIMARY KEY ("employId")
);

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
    "status" TEXT NOT NULL DEFAULT 'active',
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
    "status" TEXT NOT NULL DEFAULT 'active',
    "listingCriteria" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "businessMarket" "MarketType" NOT NULL DEFAULT 'None',
    "yearOfOperation" INTEGER NOT NULL DEFAULT 1,

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
    "status" TEXT NOT NULL DEFAULT 'active',
    "listingCriteria" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Institute_pkey" PRIMARY KEY ("instituteId")
);

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
    "giDoc" TEXT NOT NULL DEFAULT 'none',
    "blockChain" BOOLEAN NOT NULL DEFAULT false,
    "blockChainDoc" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "ethics" BOOLEAN NOT NULL DEFAULT false,
    "qualityReview" BOOLEAN NOT NULL DEFAULT false,
    "profilePermission" BOOLEAN NOT NULL DEFAULT false,
    "complianceAcknowledgement" BOOLEAN NOT NULL DEFAULT false,
    "listingRank" "ListingRanks" NOT NULL DEFAULT 'None',

    CONSTRAINT "LisitingCritera_pkey" PRIMARY KEY ("criteraId")
);

-- CreateTable
CREATE TABLE "Account" (
    "accountId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'ADMIN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("accountId")
);

-- CreateTable
CREATE TABLE "Category" (
    "categoryId" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,
    "rank" INTEGER NOT NULL DEFAULT 100,
    "description" TEXT NOT NULL DEFAULT 'none',

    CONSTRAINT "Category_pkey" PRIMARY KEY ("categoryId")
);

-- CreateTable
CREATE TABLE "Material" (
    "materialId" TEXT NOT NULL,
    "materialName" TEXT NOT NULL DEFAULT 'none',
    "subcategoryId" TEXT NOT NULL,

    CONSTRAINT "Material_pkey" PRIMARY KEY ("materialId")
);

-- CreateTable
CREATE TABLE "SubCategory" (
    "subcategoryId" TEXT NOT NULL,
    "subcategoryName" TEXT NOT NULL DEFAULT 'none',
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "SubCategory_pkey" PRIMARY KEY ("subcategoryId")
);

-- CreateTable
CREATE TABLE "CarbonSection" (
    "carbonsectionId" TEXT NOT NULL,
    "sectionType" "SectionType" NOT NULL DEFAULT 'None',
    "subCategoryId" TEXT NOT NULL,

    CONSTRAINT "CarbonSection_pkey" PRIMARY KEY ("carbonsectionId")
);

-- CreateTable
CREATE TABLE "CarbonValue" (
    "valueId" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'none',
    "value" TEXT NOT NULL DEFAULT '0-0',
    "materialId" TEXT NOT NULL,
    "carbonsectionId" TEXT NOT NULL,

    CONSTRAINT "CarbonValue_pkey" PRIMARY KEY ("valueId")
);

-- CreateTable
CREATE TABLE "PriceSection" (
    "priceSectionId" TEXT NOT NULL,
    "sectionType" "SectionType" NOT NULL DEFAULT 'None',
    "subCategoryId" TEXT NOT NULL,

    CONSTRAINT "PriceSection_pkey" PRIMARY KEY ("priceSectionId")
);

-- CreateTable
CREATE TABLE "PriceValue" (
    "valueId" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'none',
    "priceSectionId" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PriceValue_pkey" PRIMARY KEY ("valueId")
);

-- CreateTable
CREATE TABLE "GIReport" (
    "giId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL DEFAULT 'none',
    "email" TEXT NOT NULL DEFAULT 'none',
    "report" TEXT NOT NULL DEFAULT 'none',
    "productCode" TEXT NOT NULL DEFAULT 'none',

    CONSTRAINT "GIReport_pkey" PRIMARY KEY ("giId")
);

-- CreateTable
CREATE TABLE "CraftSection" (
    "craftsectionId" TEXT NOT NULL,
    "sectionName" TEXT NOT NULL DEFAULT 'none',
    "subCategoryId" TEXT NOT NULL,
    "rank" INTEGER NOT NULL DEFAULT 100,

    CONSTRAINT "CraftSection_pkey" PRIMARY KEY ("craftsectionId")
);

-- CreateTable
CREATE TABLE "CraftSubSection" (
    "craftsubsectionId" TEXT NOT NULL,
    "sectionName" TEXT NOT NULL DEFAULT 'none',
    "sectionId" TEXT NOT NULL,
    "rank" INTEGER NOT NULL DEFAULT 100,

    CONSTRAINT "CraftSubSection_pkey" PRIMARY KEY ("craftsubsectionId")
);

-- CreateTable
CREATE TABLE "CraftContent" (
    "craftsubsectionId" TEXT NOT NULL,
    "content" TEXT NOT NULL DEFAULT 'none',
    "subsectionId" TEXT NOT NULL,

    CONSTRAINT "CraftContent_pkey" PRIMARY KEY ("craftsubsectionId")
);

-- CreateTable
CREATE TABLE "CraftQuiz" (
    "quizId" TEXT NOT NULL,
    "question" TEXT NOT NULL DEFAULT 'none',
    "option1" TEXT NOT NULL DEFAULT 'none',
    "option2" TEXT NOT NULL DEFAULT 'none',
    "option3" TEXT NOT NULL DEFAULT 'none',
    "option4" TEXT NOT NULL DEFAULT 'none',
    "answer" TEXT NOT NULL DEFAULT 'none',
    "sectionId" TEXT NOT NULL,

    CONSTRAINT "CraftQuiz_pkey" PRIMARY KEY ("quizId")
);

-- CreateTable
CREATE TABLE "CraftPicture" (
    "pictureId" TEXT NOT NULL,
    "subcategroryId" TEXT NOT NULL,
    "picture" TEXT NOT NULL DEFAULT 'none',

    CONSTRAINT "CraftPicture_pkey" PRIMARY KEY ("pictureId")
);

-- CreateTable
CREATE TABLE "CraftDiscount" (
    "discountId" TEXT NOT NULL,
    "discountPercentage" INTEGER NOT NULL DEFAULT 0,
    "code" TEXT NOT NULL DEFAULT 'none',
    "email" TEXT NOT NULL,

    CONSTRAINT "CraftDiscount_pkey" PRIMARY KEY ("discountId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Business_businessEmail_key" ON "Business"("businessEmail");

-- CreateIndex
CREATE INDEX "Business_businessEmail_idx" ON "Business"("businessEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Institute_instituteEmail_key" ON "Institute"("instituteEmail");

-- CreateIndex
CREATE INDEX "Institute_instituteEmail_idx" ON "Institute"("instituteEmail");

-- CreateIndex
CREATE UNIQUE INDEX "SponsorMembership_email_key" ON "SponsorMembership"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- CreateIndex
CREATE INDEX "Account_email_idx" ON "Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Category_categoryName_key" ON "Category"("categoryName");

-- CreateIndex
CREATE UNIQUE INDEX "CraftDiscount_email_key" ON "CraftDiscount"("email");

-- AddForeignKey
ALTER TABLE "Artisan" ADD CONSTRAINT "Artisan_listingCriteria_fkey" FOREIGN KEY ("listingCriteria") REFERENCES "LisitingCritera"("criteraId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artisan" ADD CONSTRAINT "Artisan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_listingCriteria_fkey" FOREIGN KEY ("listingCriteria") REFERENCES "LisitingCritera"("criteraId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Institute" ADD CONSTRAINT "Institute_listingCriteria_fkey" FOREIGN KEY ("listingCriteria") REFERENCES "LisitingCritera"("criteraId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Institute" ADD CONSTRAINT "Institute_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuyerMembership" ADD CONSTRAINT "BuyerMembership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorpoMembership" ADD CONSTRAINT "CorpoMembership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SponsorMembership" ADD CONSTRAINT "SponsorMembership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Material" ADD CONSTRAINT "Material_subcategoryId_fkey" FOREIGN KEY ("subcategoryId") REFERENCES "SubCategory"("subcategoryId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("categoryId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarbonSection" ADD CONSTRAINT "CarbonSection_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "SubCategory"("subcategoryId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarbonValue" ADD CONSTRAINT "CarbonValue_carbonsectionId_fkey" FOREIGN KEY ("carbonsectionId") REFERENCES "CarbonSection"("carbonsectionId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarbonValue" ADD CONSTRAINT "CarbonValue_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("materialId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceSection" ADD CONSTRAINT "PriceSection_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "SubCategory"("subcategoryId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceValue" ADD CONSTRAINT "PriceValue_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("materialId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceValue" ADD CONSTRAINT "PriceValue_priceSectionId_fkey" FOREIGN KEY ("priceSectionId") REFERENCES "PriceSection"("priceSectionId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CraftSection" ADD CONSTRAINT "CraftSection_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "SubCategory"("subcategoryId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CraftSubSection" ADD CONSTRAINT "CraftSubSection_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "CraftSection"("craftsectionId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CraftContent" ADD CONSTRAINT "CraftContent_subsectionId_fkey" FOREIGN KEY ("subsectionId") REFERENCES "CraftSubSection"("craftsubsectionId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CraftQuiz" ADD CONSTRAINT "CraftQuiz_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "CraftSection"("craftsectionId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CraftPicture" ADD CONSTRAINT "CraftPicture_subcategroryId_fkey" FOREIGN KEY ("subcategroryId") REFERENCES "SubCategory"("subcategoryId") ON DELETE CASCADE ON UPDATE CASCADE;

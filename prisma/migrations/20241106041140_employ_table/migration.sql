-- CreateTable
CREATE TABLE "Employ" (
    "employId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL DEFAULT 'none',
    "skills" TEXT NOT NULL DEFAULT 'none',
    "contribution" TEXT NOT NULL DEFAULT 'none',

    CONSTRAINT "Employ_pkey" PRIMARY KEY ("employId")
);

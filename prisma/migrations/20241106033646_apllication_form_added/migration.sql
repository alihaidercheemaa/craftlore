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

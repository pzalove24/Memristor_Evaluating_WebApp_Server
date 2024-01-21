-- CreateTable
CREATE TABLE "BenchmarkType" (
    "benchmarkTypeId" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "benchmarkTypeName" TEXT NOT NULL,
    "voltageType" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "BenchmarkInformation" (
    "benchmarkInformationId" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "benchmarkInfoName" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "voltageType" TEXT NOT NULL,
    "benchmarkTypeId" TEXT NOT NULL,
    CONSTRAINT "BenchmarkInformation_benchmarkTypeId_fkey" FOREIGN KEY ("benchmarkTypeId") REFERENCES "BenchmarkType" ("benchmarkTypeId") ON DELETE RESTRICT ON UPDATE CASCADE
);

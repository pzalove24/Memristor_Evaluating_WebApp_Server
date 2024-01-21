/*
  Warnings:

  - Added the required column `updatedAt` to the `BenchmarkInformation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `BenchmarkType` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "SetResetVoltageDefinition" (
    "setResetVoltageDefId" TEXT NOT NULL PRIMARY KEY,
    "defName" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BenchmarkInput" (
    "benchmarkInputId" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BenchmarkInputTag" (
    "benchmarkInputTagId" TEXT NOT NULL PRIMARY KEY,
    "tagName" TEXT NOT NULL,
    "tagIndication" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BenchmarkInputSetup" (
    "benchmarkInputSetupId" TEXT NOT NULL PRIMARY KEY,
    "voltageType" TEXT NOT NULL,
    "dataType" TEXT NOT NULL,
    "decimalNumber" INTEGER NOT NULL,
    "exampleData" REAL NOT NULL,
    "upperLimit" REAL NOT NULL,
    "lowerLimit" REAL NOT NULL,
    "step" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BenchmarkUnit" (
    "benchmarkUnitId" TEXT NOT NULL PRIMARY KEY,
    "unitName" TEXT NOT NULL,
    "unitType" TEXT NOT NULL,
    "benchmarkSetupType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BenchmarkMethod" (
    "benchmarkMethodId" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "benchmarkMethodName" TEXT NOT NULL,
    "methodType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BenchmarkResult" (
    "benchmarkResultId" TEXT NOT NULL PRIMARY KEY,
    "benchmarkName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "paperReference" (
    "paperReferenceId" TEXT NOT NULL PRIMARY KEY,
    "article" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "setResetVoltageDefId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "paperReference_setResetVoltageDefId_fkey" FOREIGN KEY ("setResetVoltageDefId") REFERENCES "SetResetVoltageDefinition" ("setResetVoltageDefId") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BenchmarkInformation" (
    "benchmarkInformationId" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "benchmarkInfoName" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "voltageType" TEXT NOT NULL,
    "benchmarkTypeId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BenchmarkInformation_benchmarkTypeId_fkey" FOREIGN KEY ("benchmarkTypeId") REFERENCES "BenchmarkType" ("benchmarkTypeId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BenchmarkInformation" ("abbreviation", "active", "benchmarkInfoName", "benchmarkInformationId", "benchmarkTypeId", "voltageType") SELECT "abbreviation", "active", "benchmarkInfoName", "benchmarkInformationId", "benchmarkTypeId", "voltageType" FROM "BenchmarkInformation";
DROP TABLE "BenchmarkInformation";
ALTER TABLE "new_BenchmarkInformation" RENAME TO "BenchmarkInformation";
CREATE TABLE "new_BenchmarkType" (
    "benchmarkTypeId" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "benchmarkTypeName" TEXT NOT NULL,
    "voltageType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_BenchmarkType" ("active", "benchmarkTypeId", "benchmarkTypeName", "voltageType") SELECT "active", "benchmarkTypeId", "benchmarkTypeName", "voltageType" FROM "BenchmarkType";
DROP TABLE "BenchmarkType";
ALTER TABLE "new_BenchmarkType" RENAME TO "BenchmarkType";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "BenchmarkResult_benchmarkName_key" ON "BenchmarkResult"("benchmarkName");

/*
  Warnings:

  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `BenchmarkInput` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `benchmarkInputId` on the `BenchmarkInput` table. All the data in the column will be lost.
  - The primary key for the `BenchmarkResult` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `benchmarkResultId` on the `BenchmarkResult` table. All the data in the column will be lost.
  - The primary key for the `BenchmarkInputSetup` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `benchmarkInputSetupId` on the `BenchmarkInputSetup` table. All the data in the column will be lost.
  - The primary key for the `BenchmarkInformation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `benchmarkInformationId` on the `BenchmarkInformation` table. All the data in the column will be lost.
  - The primary key for the `SetResetVoltageDefinition` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `setResetVoltageDefId` on the `SetResetVoltageDefinition` table. All the data in the column will be lost.
  - The primary key for the `BenchmarkType` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `benchmarkTypeId` on the `BenchmarkType` table. All the data in the column will be lost.
  - The primary key for the `BenchmarkUnit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `benchmarkUnitId` on the `BenchmarkUnit` table. All the data in the column will be lost.
  - The primary key for the `BenchmarkMethod` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `benchmarkMethodId` on the `BenchmarkMethod` table. All the data in the column will be lost.
  - The primary key for the `SetResetVoltageDefinitionPaperReference` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `setResetVoltageDefId` on the `SetResetVoltageDefinitionPaperReference` table. All the data in the column will be lost.
  - You are about to drop the column `setResetVoltageDefinitionPaperReferenceId` on the `SetResetVoltageDefinitionPaperReference` table. All the data in the column will be lost.
  - The primary key for the `paperReference` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `paperReferenceId` on the `paperReference` table. All the data in the column will be lost.
  - The required column `id` was added to the `BenchmarkInput` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `BenchmarkResult` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `BenchmarkInputSetup` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Made the column `benchmarkUnitId` on table `BenchmarkInputSetup` required. This step will fail if there are existing NULL values in that column.
  - The required column `id` was added to the `BenchmarkInformation` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `SetResetVoltageDefinition` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `BenchmarkType` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `BenchmarkUnit` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `BenchmarkMethod` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `SetResetVoltageDefinitionPaperReference` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `setResetVoltageDefinitionId` to the `SetResetVoltageDefinitionPaperReference` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `paperReference` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_username_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Comment";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BenchmarkInput" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "benchmarkInputName" TEXT NOT NULL,
    "voltageType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_BenchmarkInput" ("active", "benchmarkInputName", "createdAt", "updatedAt", "voltageType") SELECT "active", "benchmarkInputName", "createdAt", "updatedAt", "voltageType" FROM "BenchmarkInput";
DROP TABLE "BenchmarkInput";
ALTER TABLE "new_BenchmarkInput" RENAME TO "BenchmarkInput";
CREATE TABLE "new_BenchmarkResult" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "benchmarkName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_BenchmarkResult" ("benchmarkName", "createdAt", "updatedAt") SELECT "benchmarkName", "createdAt", "updatedAt" FROM "BenchmarkResult";
DROP TABLE "BenchmarkResult";
ALTER TABLE "new_BenchmarkResult" RENAME TO "BenchmarkResult";
CREATE UNIQUE INDEX "BenchmarkResult_benchmarkName_key" ON "BenchmarkResult"("benchmarkName");
CREATE TABLE "new_BenchmarkInputSetup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "benchmarkUnitId" TEXT NOT NULL,
    "benchmarkInputSetupName" TEXT NOT NULL,
    "voltageType" TEXT NOT NULL,
    "dataType" TEXT NOT NULL,
    "decimalNumber" INTEGER NOT NULL,
    "exampleData" REAL NOT NULL,
    "upperLimit" REAL NOT NULL,
    "lowerLimit" REAL NOT NULL,
    "stepIncreasing" REAL NOT NULL,
    "benchmarkInputId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BenchmarkInputSetup_benchmarkUnitId_fkey" FOREIGN KEY ("benchmarkUnitId") REFERENCES "BenchmarkUnit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkInputSetup_benchmarkInputId_fkey" FOREIGN KEY ("benchmarkInputId") REFERENCES "BenchmarkInput" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BenchmarkInputSetup" ("benchmarkInputId", "benchmarkInputSetupName", "benchmarkUnitId", "createdAt", "dataType", "decimalNumber", "exampleData", "lowerLimit", "stepIncreasing", "updatedAt", "upperLimit", "voltageType") SELECT "benchmarkInputId", "benchmarkInputSetupName", "benchmarkUnitId", "createdAt", "dataType", "decimalNumber", "exampleData", "lowerLimit", "stepIncreasing", "updatedAt", "upperLimit", "voltageType" FROM "BenchmarkInputSetup";
DROP TABLE "BenchmarkInputSetup";
ALTER TABLE "new_BenchmarkInputSetup" RENAME TO "BenchmarkInputSetup";
CREATE TABLE "new_BenchmarkInformation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "benchmarkInfoName" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "voltageType" TEXT NOT NULL,
    "benchmarkTypeId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BenchmarkInformation_benchmarkTypeId_fkey" FOREIGN KEY ("benchmarkTypeId") REFERENCES "BenchmarkType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BenchmarkInformation" ("abbreviation", "active", "benchmarkInfoName", "benchmarkTypeId", "createdAt", "updatedAt", "voltageType") SELECT "abbreviation", "active", "benchmarkInfoName", "benchmarkTypeId", "createdAt", "updatedAt", "voltageType" FROM "BenchmarkInformation";
DROP TABLE "BenchmarkInformation";
ALTER TABLE "new_BenchmarkInformation" RENAME TO "BenchmarkInformation";
CREATE TABLE "new_SetResetVoltageDefinition" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "defName" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_SetResetVoltageDefinition" ("condition", "createdAt", "defName", "updatedAt") SELECT "condition", "createdAt", "defName", "updatedAt" FROM "SetResetVoltageDefinition";
DROP TABLE "SetResetVoltageDefinition";
ALTER TABLE "new_SetResetVoltageDefinition" RENAME TO "SetResetVoltageDefinition";
CREATE TABLE "new_BenchmarkType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "benchmarkTypeName" TEXT NOT NULL,
    "voltageType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_BenchmarkType" ("active", "benchmarkTypeName", "createdAt", "updatedAt", "voltageType") SELECT "active", "benchmarkTypeName", "createdAt", "updatedAt", "voltageType" FROM "BenchmarkType";
DROP TABLE "BenchmarkType";
ALTER TABLE "new_BenchmarkType" RENAME TO "BenchmarkType";
CREATE TABLE "new_BenchmarkUnit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "unitName" TEXT NOT NULL,
    "unitType" TEXT NOT NULL,
    "benchmarkSetupType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_BenchmarkUnit" ("benchmarkSetupType", "createdAt", "unitName", "unitType", "updatedAt") SELECT "benchmarkSetupType", "createdAt", "unitName", "unitType", "updatedAt" FROM "BenchmarkUnit";
DROP TABLE "BenchmarkUnit";
ALTER TABLE "new_BenchmarkUnit" RENAME TO "BenchmarkUnit";
CREATE TABLE "new_BenchmarkMethod" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "benchmarkInputId" TEXT NOT NULL,
    "benchmarkUnitId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "benchmarkMethodName" TEXT NOT NULL,
    "methodType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BenchmarkMethod_benchmarkInputId_fkey" FOREIGN KEY ("benchmarkInputId") REFERENCES "BenchmarkInput" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkMethod_benchmarkUnitId_fkey" FOREIGN KEY ("benchmarkUnitId") REFERENCES "BenchmarkUnit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BenchmarkMethod" ("active", "benchmarkInputId", "benchmarkMethodName", "benchmarkUnitId", "createdAt", "methodType", "updatedAt") SELECT "active", "benchmarkInputId", "benchmarkMethodName", "benchmarkUnitId", "createdAt", "methodType", "updatedAt" FROM "BenchmarkMethod";
DROP TABLE "BenchmarkMethod";
ALTER TABLE "new_BenchmarkMethod" RENAME TO "BenchmarkMethod";
CREATE TABLE "new_SetResetVoltageDefinitionPaperReference" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "setResetVoltageDefinitionId" TEXT NOT NULL,
    "paperReferenceId" TEXT,
    CONSTRAINT "SetResetVoltageDefinitionPaperReference_setResetVoltageDefinitionId_fkey" FOREIGN KEY ("setResetVoltageDefinitionId") REFERENCES "SetResetVoltageDefinition" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SetResetVoltageDefinitionPaperReference_paperReferenceId_fkey" FOREIGN KEY ("paperReferenceId") REFERENCES "paperReference" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_SetResetVoltageDefinitionPaperReference" ("paperReferenceId") SELECT "paperReferenceId" FROM "SetResetVoltageDefinitionPaperReference";
DROP TABLE "SetResetVoltageDefinitionPaperReference";
ALTER TABLE "new_SetResetVoltageDefinitionPaperReference" RENAME TO "SetResetVoltageDefinitionPaperReference";
CREATE TABLE "new_paperReference" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "article" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_paperReference" ("article", "createdAt", "updatedAt", "url") SELECT "article", "createdAt", "updatedAt", "url" FROM "paperReference";
DROP TABLE "paperReference";
ALTER TABLE "new_paperReference" RENAME TO "paperReference";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

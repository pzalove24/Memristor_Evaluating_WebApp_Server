/*
  Warnings:

  - You are about to drop the column `dataType` on the `BenchmarkInputSetup` table. All the data in the column will be lost.
  - You are about to drop the column `voltageType` on the `BenchmarkInputSetup` table. All the data in the column will be lost.
  - You are about to drop the column `voltageType` on the `BenchmarkType` table. All the data in the column will be lost.
  - You are about to drop the column `unitType` on the `BenchmarkUnit` table. All the data in the column will be lost.
  - You are about to drop the column `voltageType` on the `BenchmarkInformation` table. All the data in the column will be lost.
  - You are about to drop the column `methodType` on the `BenchmarkMethod` table. All the data in the column will be lost.
  - You are about to drop the column `voltageType` on the `BenchmarkMethod` table. All the data in the column will be lost.
  - You are about to drop the column `voltageType` on the `BenchmarkInput` table. All the data in the column will be lost.
  - Added the required column `dataTypeId` to the `BenchmarkInputSetup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `voltageTypeId` to the `BenchmarkInputSetup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `voltageTypeId` to the `BenchmarkType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataTypeId` to the `BenchmarkUnit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `voltageTypeId` to the `BenchmarkInformation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `methodTypeId` to the `BenchmarkMethod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `voltageTypeId` to the `BenchmarkMethod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `voltageTypeId` to the `BenchmarkInput` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "VoltageType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MethodType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "DataType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BenchmarkInputSetup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "benchmarkUnitId" TEXT NOT NULL,
    "voltageTypeId" TEXT NOT NULL,
    "dataTypeId" TEXT NOT NULL,
    "benchmarkInputSetupName" TEXT NOT NULL,
    "decimalNumber" INTEGER NOT NULL,
    "exampleData" TEXT NOT NULL,
    "upperLimit" REAL NOT NULL,
    "lowerLimit" REAL NOT NULL,
    "stepIncreasing" REAL NOT NULL,
    "benchmarkInputId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BenchmarkInputSetup_benchmarkUnitId_fkey" FOREIGN KEY ("benchmarkUnitId") REFERENCES "BenchmarkUnit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkInputSetup_voltageTypeId_fkey" FOREIGN KEY ("voltageTypeId") REFERENCES "VoltageType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkInputSetup_dataTypeId_fkey" FOREIGN KEY ("dataTypeId") REFERENCES "DataType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkInputSetup_benchmarkInputId_fkey" FOREIGN KEY ("benchmarkInputId") REFERENCES "BenchmarkInput" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BenchmarkInputSetup" ("benchmarkInputId", "benchmarkInputSetupName", "benchmarkUnitId", "createdAt", "decimalNumber", "exampleData", "id", "lowerLimit", "stepIncreasing", "updatedAt", "upperLimit") SELECT "benchmarkInputId", "benchmarkInputSetupName", "benchmarkUnitId", "createdAt", "decimalNumber", "exampleData", "id", "lowerLimit", "stepIncreasing", "updatedAt", "upperLimit" FROM "BenchmarkInputSetup";
DROP TABLE "BenchmarkInputSetup";
ALTER TABLE "new_BenchmarkInputSetup" RENAME TO "BenchmarkInputSetup";
CREATE TABLE "new_BenchmarkType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "voltageTypeId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "benchmarkTypeName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BenchmarkType_voltageTypeId_fkey" FOREIGN KEY ("voltageTypeId") REFERENCES "VoltageType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BenchmarkType" ("active", "benchmarkTypeName", "createdAt", "id", "updatedAt") SELECT "active", "benchmarkTypeName", "createdAt", "id", "updatedAt" FROM "BenchmarkType";
DROP TABLE "BenchmarkType";
ALTER TABLE "new_BenchmarkType" RENAME TO "BenchmarkType";
CREATE UNIQUE INDEX "BenchmarkType_benchmarkTypeName_key" ON "BenchmarkType"("benchmarkTypeName");
CREATE TABLE "new_BenchmarkUnit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dataTypeId" TEXT NOT NULL,
    "unitName" TEXT NOT NULL,
    "benchmarkSetupType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BenchmarkUnit_dataTypeId_fkey" FOREIGN KEY ("dataTypeId") REFERENCES "DataType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BenchmarkUnit" ("benchmarkSetupType", "createdAt", "id", "unitName", "updatedAt") SELECT "benchmarkSetupType", "createdAt", "id", "unitName", "updatedAt" FROM "BenchmarkUnit";
DROP TABLE "BenchmarkUnit";
ALTER TABLE "new_BenchmarkUnit" RENAME TO "BenchmarkUnit";
CREATE UNIQUE INDEX "BenchmarkUnit_unitName_key" ON "BenchmarkUnit"("unitName");
CREATE TABLE "new_BenchmarkInformation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "voltageTypeId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "benchmarkInfoName" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "benchmarkTypeId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BenchmarkInformation_voltageTypeId_fkey" FOREIGN KEY ("voltageTypeId") REFERENCES "VoltageType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkInformation_benchmarkTypeId_fkey" FOREIGN KEY ("benchmarkTypeId") REFERENCES "BenchmarkType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BenchmarkInformation" ("abbreviation", "active", "benchmarkInfoName", "benchmarkTypeId", "createdAt", "id", "updatedAt") SELECT "abbreviation", "active", "benchmarkInfoName", "benchmarkTypeId", "createdAt", "id", "updatedAt" FROM "BenchmarkInformation";
DROP TABLE "BenchmarkInformation";
ALTER TABLE "new_BenchmarkInformation" RENAME TO "BenchmarkInformation";
CREATE UNIQUE INDEX "BenchmarkInformation_benchmarkInfoName_key" ON "BenchmarkInformation"("benchmarkInfoName");
CREATE TABLE "new_BenchmarkMethod" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "benchmarkInputId" TEXT NOT NULL,
    "benchmarkUnitId" TEXT,
    "voltageTypeId" TEXT NOT NULL,
    "methodTypeId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "benchmarkMethodName" TEXT NOT NULL,
    "beforeBenchmark" BOOLEAN NOT NULL DEFAULT true,
    "inSoftware" BOOLEAN NOT NULL DEFAULT true,
    "hardwareOperation" BOOLEAN NOT NULL DEFAULT true,
    "benchmarkInformationId" TEXT NOT NULL,
    "benchmarkTypeId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BenchmarkMethod_benchmarkInputId_fkey" FOREIGN KEY ("benchmarkInputId") REFERENCES "BenchmarkInput" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkMethod_benchmarkUnitId_fkey" FOREIGN KEY ("benchmarkUnitId") REFERENCES "BenchmarkUnit" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkMethod_voltageTypeId_fkey" FOREIGN KEY ("voltageTypeId") REFERENCES "VoltageType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkMethod_methodTypeId_fkey" FOREIGN KEY ("methodTypeId") REFERENCES "MethodType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkMethod_benchmarkInformationId_fkey" FOREIGN KEY ("benchmarkInformationId") REFERENCES "BenchmarkInformation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkMethod_benchmarkTypeId_fkey" FOREIGN KEY ("benchmarkTypeId") REFERENCES "BenchmarkType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BenchmarkMethod" ("active", "beforeBenchmark", "benchmarkInformationId", "benchmarkInputId", "benchmarkMethodName", "benchmarkTypeId", "benchmarkUnitId", "createdAt", "id", "inSoftware", "updatedAt") SELECT "active", "beforeBenchmark", "benchmarkInformationId", "benchmarkInputId", "benchmarkMethodName", "benchmarkTypeId", "benchmarkUnitId", "createdAt", "id", "inSoftware", "updatedAt" FROM "BenchmarkMethod";
DROP TABLE "BenchmarkMethod";
ALTER TABLE "new_BenchmarkMethod" RENAME TO "BenchmarkMethod";
CREATE UNIQUE INDEX "BenchmarkMethod_benchmarkMethodName_key" ON "BenchmarkMethod"("benchmarkMethodName");
CREATE UNIQUE INDEX "BenchmarkMethod_benchmarkInformationId_key" ON "BenchmarkMethod"("benchmarkInformationId");
CREATE TABLE "new_BenchmarkInput" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "voltageTypeId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "benchmarkInputName" TEXT NOT NULL,
    "benchmarkTypeId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BenchmarkInput_voltageTypeId_fkey" FOREIGN KEY ("voltageTypeId") REFERENCES "VoltageType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkInput_benchmarkTypeId_fkey" FOREIGN KEY ("benchmarkTypeId") REFERENCES "BenchmarkType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BenchmarkInput" ("active", "benchmarkInputName", "benchmarkTypeId", "createdAt", "id", "updatedAt") SELECT "active", "benchmarkInputName", "benchmarkTypeId", "createdAt", "id", "updatedAt" FROM "BenchmarkInput";
DROP TABLE "BenchmarkInput";
ALTER TABLE "new_BenchmarkInput" RENAME TO "BenchmarkInput";
CREATE UNIQUE INDEX "BenchmarkInput_benchmarkInputName_key" ON "BenchmarkInput"("benchmarkInputName");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

/*
  Warnings:

  - You are about to drop the column `step` on the `BenchmarkInputSetup` table. All the data in the column will be lost.
  - Added the required column `benchmarkInputId` to the `BenchmarkInputSetup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `benchmarkUnitId` to the `BenchmarkInputSetup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stepIncreasing` to the `BenchmarkInputSetup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `benchmarkInputId` to the `BenchmarkInputTag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `benchmarkInputId` to the `BenchmarkMethod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `benchmarkUnitId` to the `BenchmarkMethod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `benchmarkInputName` to the `BenchmarkInput` table without a default value. This is not possible if the table is not empty.
  - Added the required column `voltageType` to the `BenchmarkInput` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BenchmarkInputSetup" (
    "benchmarkInputSetupId" TEXT NOT NULL PRIMARY KEY,
    "benchmarkUnitId" TEXT NOT NULL,
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
    CONSTRAINT "BenchmarkInputSetup_benchmarkUnitId_fkey" FOREIGN KEY ("benchmarkUnitId") REFERENCES "BenchmarkUnit" ("benchmarkUnitId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkInputSetup_benchmarkInputId_fkey" FOREIGN KEY ("benchmarkInputId") REFERENCES "BenchmarkInput" ("benchmarkInputId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BenchmarkInputSetup" ("benchmarkInputSetupId", "createdAt", "dataType", "decimalNumber", "exampleData", "lowerLimit", "updatedAt", "upperLimit", "voltageType") SELECT "benchmarkInputSetupId", "createdAt", "dataType", "decimalNumber", "exampleData", "lowerLimit", "updatedAt", "upperLimit", "voltageType" FROM "BenchmarkInputSetup";
DROP TABLE "BenchmarkInputSetup";
ALTER TABLE "new_BenchmarkInputSetup" RENAME TO "BenchmarkInputSetup";
CREATE TABLE "new_BenchmarkInputTag" (
    "benchmarkInputTagId" TEXT NOT NULL PRIMARY KEY,
    "tagName" TEXT NOT NULL,
    "tagIndication" TEXT NOT NULL,
    "benchmarkInputId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BenchmarkInputTag_benchmarkInputId_fkey" FOREIGN KEY ("benchmarkInputId") REFERENCES "BenchmarkInput" ("benchmarkInputId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BenchmarkInputTag" ("benchmarkInputTagId", "createdAt", "tagIndication", "tagName", "updatedAt") SELECT "benchmarkInputTagId", "createdAt", "tagIndication", "tagName", "updatedAt" FROM "BenchmarkInputTag";
DROP TABLE "BenchmarkInputTag";
ALTER TABLE "new_BenchmarkInputTag" RENAME TO "BenchmarkInputTag";
CREATE TABLE "new_BenchmarkMethod" (
    "benchmarkMethodId" TEXT NOT NULL PRIMARY KEY,
    "benchmarkInputId" TEXT NOT NULL,
    "benchmarkUnitId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "benchmarkMethodName" TEXT NOT NULL,
    "methodType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BenchmarkMethod_benchmarkInputId_fkey" FOREIGN KEY ("benchmarkInputId") REFERENCES "BenchmarkInput" ("benchmarkInputId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkMethod_benchmarkUnitId_fkey" FOREIGN KEY ("benchmarkUnitId") REFERENCES "BenchmarkUnit" ("benchmarkUnitId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BenchmarkMethod" ("active", "benchmarkMethodId", "benchmarkMethodName", "createdAt", "methodType", "updatedAt") SELECT "active", "benchmarkMethodId", "benchmarkMethodName", "createdAt", "methodType", "updatedAt" FROM "BenchmarkMethod";
DROP TABLE "BenchmarkMethod";
ALTER TABLE "new_BenchmarkMethod" RENAME TO "BenchmarkMethod";
CREATE TABLE "new_BenchmarkInput" (
    "benchmarkInputId" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "benchmarkInputName" TEXT NOT NULL,
    "voltageType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_BenchmarkInput" ("active", "benchmarkInputId", "createdAt", "updatedAt") SELECT "active", "benchmarkInputId", "createdAt", "updatedAt" FROM "BenchmarkInput";
DROP TABLE "BenchmarkInput";
ALTER TABLE "new_BenchmarkInput" RENAME TO "BenchmarkInput";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

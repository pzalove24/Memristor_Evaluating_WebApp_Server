/*
  Warnings:

  - You are about to drop the column `benchmarkUnitId` on the `BenchmarkMethod` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BenchmarkMethod" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "benchmarkInputId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "benchmarkMethodName" TEXT NOT NULL,
    "methodType" TEXT NOT NULL,
    "beforeBenchmark" BOOLEAN NOT NULL,
    "inSoftware" BOOLEAN NOT NULL,
    "benchmarkInformationId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BenchmarkMethod_benchmarkInputId_fkey" FOREIGN KEY ("benchmarkInputId") REFERENCES "BenchmarkInput" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkMethod_benchmarkInformationId_fkey" FOREIGN KEY ("benchmarkInformationId") REFERENCES "BenchmarkInformation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BenchmarkMethod" ("active", "beforeBenchmark", "benchmarkInformationId", "benchmarkInputId", "benchmarkMethodName", "createdAt", "id", "inSoftware", "methodType", "updatedAt") SELECT "active", "beforeBenchmark", "benchmarkInformationId", "benchmarkInputId", "benchmarkMethodName", "createdAt", "id", "inSoftware", "methodType", "updatedAt" FROM "BenchmarkMethod";
DROP TABLE "BenchmarkMethod";
ALTER TABLE "new_BenchmarkMethod" RENAME TO "BenchmarkMethod";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

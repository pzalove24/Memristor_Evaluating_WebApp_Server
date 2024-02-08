-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BenchmarkInputSetup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "benchmarkUnitId" TEXT NOT NULL,
    "benchmarkInputSetupName" TEXT NOT NULL,
    "voltageType" TEXT NOT NULL,
    "dataType" TEXT NOT NULL,
    "decimalNumber" INTEGER NOT NULL,
    "exampleData" TEXT NOT NULL,
    "upperLimit" REAL NOT NULL,
    "lowerLimit" REAL NOT NULL,
    "stepIncreasing" REAL NOT NULL,
    "benchmarkInputId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BenchmarkInputSetup_benchmarkUnitId_fkey" FOREIGN KEY ("benchmarkUnitId") REFERENCES "BenchmarkUnit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkInputSetup_benchmarkInputId_fkey" FOREIGN KEY ("benchmarkInputId") REFERENCES "BenchmarkInput" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BenchmarkInputSetup" ("benchmarkInputId", "benchmarkInputSetupName", "benchmarkUnitId", "createdAt", "dataType", "decimalNumber", "exampleData", "id", "lowerLimit", "stepIncreasing", "updatedAt", "upperLimit", "voltageType") SELECT "benchmarkInputId", "benchmarkInputSetupName", "benchmarkUnitId", "createdAt", "dataType", "decimalNumber", "exampleData", "id", "lowerLimit", "stepIncreasing", "updatedAt", "upperLimit", "voltageType" FROM "BenchmarkInputSetup";
DROP TABLE "BenchmarkInputSetup";
ALTER TABLE "new_BenchmarkInputSetup" RENAME TO "BenchmarkInputSetup";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

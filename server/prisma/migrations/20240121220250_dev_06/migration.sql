-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BenchmarkInputSetup" (
    "benchmarkInputSetupId" TEXT NOT NULL PRIMARY KEY,
    "benchmarkUnitId" TEXT,
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
    CONSTRAINT "BenchmarkInputSetup_benchmarkUnitId_fkey" FOREIGN KEY ("benchmarkUnitId") REFERENCES "BenchmarkUnit" ("benchmarkUnitId") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkInputSetup_benchmarkInputId_fkey" FOREIGN KEY ("benchmarkInputId") REFERENCES "BenchmarkInput" ("benchmarkInputId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BenchmarkInputSetup" ("benchmarkInputId", "benchmarkInputSetupId", "benchmarkInputSetupName", "benchmarkUnitId", "createdAt", "dataType", "decimalNumber", "exampleData", "lowerLimit", "stepIncreasing", "updatedAt", "upperLimit", "voltageType") SELECT "benchmarkInputId", "benchmarkInputSetupId", "benchmarkInputSetupName", "benchmarkUnitId", "createdAt", "dataType", "decimalNumber", "exampleData", "lowerLimit", "stepIncreasing", "updatedAt", "upperLimit", "voltageType" FROM "BenchmarkInputSetup";
DROP TABLE "BenchmarkInputSetup";
ALTER TABLE "new_BenchmarkInputSetup" RENAME TO "BenchmarkInputSetup";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

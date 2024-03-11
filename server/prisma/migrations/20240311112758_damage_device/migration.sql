-- RedefineTables
PRAGMA foreign_keys=OFF;
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
    "damageDevice" BOOLEAN NOT NULL DEFAULT false,
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
INSERT INTO "new_BenchmarkMethod" ("active", "beforeBenchmark", "benchmarkInformationId", "benchmarkInputId", "benchmarkMethodName", "benchmarkTypeId", "benchmarkUnitId", "createdAt", "hardwareOperation", "id", "inSoftware", "methodTypeId", "updatedAt", "voltageTypeId") SELECT "active", "beforeBenchmark", "benchmarkInformationId", "benchmarkInputId", "benchmarkMethodName", "benchmarkTypeId", "benchmarkUnitId", "createdAt", "hardwareOperation", "id", "inSoftware", "methodTypeId", "updatedAt", "voltageTypeId" FROM "BenchmarkMethod";
DROP TABLE "BenchmarkMethod";
ALTER TABLE "new_BenchmarkMethod" RENAME TO "BenchmarkMethod";
CREATE UNIQUE INDEX "BenchmarkMethod_benchmarkMethodName_key" ON "BenchmarkMethod"("benchmarkMethodName");
CREATE UNIQUE INDEX "BenchmarkMethod_benchmarkInformationId_key" ON "BenchmarkMethod"("benchmarkInformationId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

/*
  Warnings:

  - A unique constraint covering the columns `[benchmarkInfoName]` on the table `BenchmarkInformation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[benchmarkInputName]` on the table `BenchmarkInput` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[benchmarkInputSetupName]` on the table `BenchmarkInputSetup` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[benchmarkMethodName]` on the table `BenchmarkMethod` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[benchmarkTypeName]` on the table `BenchmarkType` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[unitName]` on the table `BenchmarkUnit` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[defName]` on the table `SetResetVoltageDefinition` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BenchmarkInformation_benchmarkInfoName_key" ON "BenchmarkInformation"("benchmarkInfoName");

-- CreateIndex
CREATE UNIQUE INDEX "BenchmarkInput_benchmarkInputName_key" ON "BenchmarkInput"("benchmarkInputName");

-- CreateIndex
CREATE UNIQUE INDEX "BenchmarkInputSetup_benchmarkInputSetupName_key" ON "BenchmarkInputSetup"("benchmarkInputSetupName");

-- CreateIndex
CREATE UNIQUE INDEX "BenchmarkMethod_benchmarkMethodName_key" ON "BenchmarkMethod"("benchmarkMethodName");

-- CreateIndex
CREATE UNIQUE INDEX "BenchmarkType_benchmarkTypeName_key" ON "BenchmarkType"("benchmarkTypeName");

-- CreateIndex
CREATE UNIQUE INDEX "BenchmarkUnit_unitName_key" ON "BenchmarkUnit"("unitName");

-- CreateIndex
CREATE UNIQUE INDEX "SetResetVoltageDefinition_defName_key" ON "SetResetVoltageDefinition"("defName");

/*
  Warnings:

  - A unique constraint covering the columns `[benchmarkInformationId]` on the table `BenchmarkMethod` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BenchmarkMethod_benchmarkInformationId_key" ON "BenchmarkMethod"("benchmarkInformationId");

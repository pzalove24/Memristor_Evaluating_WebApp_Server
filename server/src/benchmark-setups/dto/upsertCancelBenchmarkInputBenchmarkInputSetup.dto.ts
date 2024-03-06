import { BenchmarkInputSetup } from '@prisma/client';
import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';

export class UpsertCancelBenchmarkInputBenchmarkInputSetupDto {
  @IsNotEmpty()
  @IsArray()
  benchmarkInputSetupList: BenchmarkInputSetup[];
}

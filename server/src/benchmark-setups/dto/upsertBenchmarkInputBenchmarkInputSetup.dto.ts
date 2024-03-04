import { BenchmarkInputSetup } from '@prisma/client';
import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';

export class UpsertBenchmarkInputBenchmarkInputSetupDto {
  @IsNotEmpty()
  @IsArray()
  benchmarkInputSetupList: BenchmarkInputSetup[];

  @IsOptional()
  @IsArray()
  deleteBenchmarkInputSetupList: BenchmarkInputSetup[];
}

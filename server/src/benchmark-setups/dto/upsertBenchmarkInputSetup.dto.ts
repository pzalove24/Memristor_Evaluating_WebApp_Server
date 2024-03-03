import { BenchmarkInputSetup } from '@prisma/client';
import { IsArray, IsNotEmpty } from 'class-validator';

export class UpsertBenchmarkInputBenchmarkInputSetupDto {
  @IsNotEmpty()
  @IsArray()
  benchmarkInputSetupList: BenchmarkInputSetup[];
}

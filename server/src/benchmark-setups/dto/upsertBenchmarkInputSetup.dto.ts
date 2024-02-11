import { BenchmarkInputSetup } from '@prisma/client';
import { IsArray, IsNotEmpty } from 'class-validator';

export class UpsertBenchmarkInputSetupDto {
  @IsNotEmpty()
  @IsArray()
  benchmarkInputSetupList: BenchmarkInputSetup[];
}

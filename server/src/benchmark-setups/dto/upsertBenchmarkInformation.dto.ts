import { BenchmarkInformation } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class UpsertBenchmarkInformationDto {
  
  @IsNotEmpty()
  benchmarkInformation: BenchmarkInformation;
}

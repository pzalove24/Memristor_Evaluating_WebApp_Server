import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { VoltageTypeEnum } from './enum.dto';

export class UpsertBenchmarkInputDto {
  @IsNotEmpty()
  @IsString()
  benchmarkInputName: string;

  @IsNotEmpty()
  @IsString()
  voltageTypeId: string;

  @IsNotEmpty()
  @IsString()
  benchmarkTypeId: string;
}

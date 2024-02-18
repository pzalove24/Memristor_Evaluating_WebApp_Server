import { BenchmarkInput, BenchmarkMethod, BenchmarkType } from '@prisma/client';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { MethodTypeEnum, SetupTypeEnum, VoltageTypeEnum } from './enum.dto';

export class ListAllBenchmarkSetupsDto {
  @IsNotEmpty()
  @IsString()
  type: BenchmarkType['benchmarkTypeName'];

  @IsNotEmpty()
  @IsString()
  setup: SetupTypeEnum;

  @IsOptional()
  @IsString()
  voltageType: string;

  @IsOptional()
  @IsString()
  methodType: string;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  page: number;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  limit: number;
}

export class FilteredBenchmarkSetupsDto {
  @IsOptional()
  filteredBenchmarks: BenchmarkInput[] | BenchmarkMethod[];

}

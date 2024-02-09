import { BenchmarkType } from '@prisma/client';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class ListAllBenchmarkSetupsDto {
  @IsNotEmpty()
  @IsString()
  type: BenchmarkType['benchmarkTypeName'];

  @IsNotEmpty()
  @IsString()
  setup: SetupTypeEnum;

  @IsOptional()
  @IsString()
  voltage: VoltageTypeEnum;

  @IsOptional()
  @IsString()
  method: MethodTypeEnum;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  page: number;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  limit: number;
}

export enum MethodTypeEnum {
  Graph = 'graph',
  Calculation = 'calculation',
}

export enum VoltageTypeEnum {
  Sweep = 'sweep',
  Pulse = 'pulse',
}

export enum SetupTypeEnum {
  Input = 'Input',
  Method = 'Method',
}

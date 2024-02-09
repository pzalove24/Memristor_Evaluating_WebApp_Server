import { BenchmarkType } from '@prisma/client';
import { IsInt, IsNumber, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class ListAllBenchmarkSetupsDto {
  @IsString()
  type: BenchmarkType['benchmarkTypeName'];

  @IsString()
  setup: SetupTypeEnum;

  @IsString()
  voltage: VoltageTypeEnum;

  @IsInt()
  @Type(() => Number)
  page: number;

  @IsInt()
  @Type(() => Number)
  limit: number;
}

export enum VoltageTypeEnum {
  Sweep = 'sweep',
  Pulse = 'pulse',
}

export enum SetupTypeEnum {
  Input = 'Input',
  Method = 'Method',
}

import { BenchmarkType } from '@prisma/client';
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
  voltageType: VoltageTypeEnum;

  @IsOptional()
  @IsString()
  methodType: MethodTypeEnum;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  page: number;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  limit: number;
}





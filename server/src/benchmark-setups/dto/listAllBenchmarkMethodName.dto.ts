import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ListAllBenchmarkMethodNameDto {
  @IsNotEmpty()
  @IsString()
  type: string;

  @IsOptional()
  @IsString()
  searchName: string;

  @IsOptional()
  @IsString()
  voltageType: string;

  @IsOptional()
  @IsString()
  methodType: string;
}

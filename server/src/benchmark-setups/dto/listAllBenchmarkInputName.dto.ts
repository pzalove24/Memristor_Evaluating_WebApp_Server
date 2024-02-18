import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ListAllBenchmarkInputNameDto {
  @IsNotEmpty()
  @IsString()
  type: string;

  @IsOptional()
  @IsString()
  searchName: string;

  @IsOptional()
  @IsString()
  voltageType: string;
}

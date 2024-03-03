import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateBenchmarkInputBenchmarkInputSetupDto {

  @IsNotEmpty()
  @IsString()
  benchmarkInputId: string;
}

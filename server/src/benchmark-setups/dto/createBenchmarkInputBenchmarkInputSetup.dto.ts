import { IsArray, IsNotEmpty, IsString } from 'class-validator';

// export class CreateBenchmarkInputBenchmarkInputSetupDto {
//   @IsNotEmpty()
//   @IsString()
//   benchmarkInputId: string;
// }

export class CreateBenchmarkInputBenchmarkInputSetupResponseDto {
  id: string;
  benchmarkUnitId: string;
  voltageTypeId: string;
  dataTypeId: string;
  benchmarkInputSetupName: string;
  decimalNumber: number;
  exampleData: string;
  upperLimit: number;
  lowerLimit: number;
  stepIncreasing: number;
  benchmarkInputId: string;
}

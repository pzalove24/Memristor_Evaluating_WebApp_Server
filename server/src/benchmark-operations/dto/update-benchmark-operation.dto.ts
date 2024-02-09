import { PartialType } from '@nestjs/mapped-types';
import { CreateBenchmarkOperationDto } from './create-benchmark-operation.dto';

export class UpdateBenchmarkOperationDto extends PartialType(CreateBenchmarkOperationDto) {}

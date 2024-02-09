import { PartialType } from '@nestjs/mapped-types';
import { CreateBenchmarkSetupDto } from './create-benchmark-setup.dto';

export class UpdateBenchmarkSetupDto extends PartialType(CreateBenchmarkSetupDto) {}

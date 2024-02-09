import { PartialType } from '@nestjs/mapped-types';
import { CreateBenchmarkReviewDto } from './create-benchmark-review.dto';

export class UpdateBenchmarkReviewDto extends PartialType(CreateBenchmarkReviewDto) {}

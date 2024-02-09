import { Module } from '@nestjs/common';
import { BenchmarkReviewsService } from './benchmark-reviews.service';
import { BenchmarkReviewsController } from './benchmark-reviews.controller';

@Module({
  controllers: [BenchmarkReviewsController],
  providers: [BenchmarkReviewsService],
})
export class BenchmarkReviewsModule {}

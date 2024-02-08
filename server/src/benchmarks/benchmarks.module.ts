import { Module } from '@nestjs/common';
import { BenchmarksService } from './benchmarks.service';
import { BenchmarksController } from './benchmarks.controller';

@Module({
  controllers: [BenchmarksController],
  providers: [BenchmarksService],
})
export class BenchmarksModule {}

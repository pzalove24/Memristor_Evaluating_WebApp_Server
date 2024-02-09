import { Module } from '@nestjs/common';
import { BenchmarkOperationsService } from './benchmark-operations.service';
import { BenchmarkOperationsController } from './benchmark-operations.controller';

@Module({
  controllers: [BenchmarkOperationsController],
  providers: [BenchmarkOperationsService],
})
export class BenchmarkOperationsModule {}

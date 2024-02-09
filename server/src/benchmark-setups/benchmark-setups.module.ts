import { Module } from '@nestjs/common';
import { BenchmarkSetupsService } from './benchmark-setups.service';
import { BenchmarkSetupsController } from './benchmark-setups.controller';

@Module({
  controllers: [BenchmarkSetupsController],
  providers: [BenchmarkSetupsService],
})
export class BenchmarkSetupsModule {}

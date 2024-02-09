import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SerialportModule } from './serialport/serialport.module';
import { BenchmarkOperationsModule } from './benchmark-operations/benchmark-operations.module';
import { BenchmarkSetupsModule } from './benchmark-setups/benchmark-setups.module';
import { BenchmarkReviewsModule } from './benchmark-reviews/benchmark-reviews.module';

@Module({
  imports: [PrismaModule, SerialportModule, BenchmarkOperationsModule, BenchmarkSetupsModule, BenchmarkReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

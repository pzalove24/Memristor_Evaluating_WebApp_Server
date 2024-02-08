import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SerialportModule } from './serialport/serialport.module';
import { BenchmarksModule } from './benchmarks/benchmarks.module';

@Module({
  imports: [PrismaModule, SerialportModule, BenchmarksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SerialportModule } from './serialport/serialport.module';

@Module({
  imports: [PrismaModule, SerialportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

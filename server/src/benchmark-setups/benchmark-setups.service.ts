import { Injectable } from '@nestjs/common';
import { CreateBenchmarkSetupDto } from './dto/create-benchmark-setup.dto';
import { UpdateBenchmarkSetupDto } from './dto/update-benchmark-setup.dto';

@Injectable()
export class BenchmarkSetupsService {
  create(createBenchmarkSetupDto: CreateBenchmarkSetupDto) {
    return 'This action adds a new benchmarkSetup';
  }

  findAll() {
    return `This action returns all benchmarkSetups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} benchmarkSetup`;
  }

  update(id: number, updateBenchmarkSetupDto: UpdateBenchmarkSetupDto) {
    return `This action updates a #${id} benchmarkSetup`;
  }

  remove(id: number) {
    return `This action removes a #${id} benchmarkSetup`;
  }
}

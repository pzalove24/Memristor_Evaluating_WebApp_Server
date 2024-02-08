import { Injectable } from '@nestjs/common';
import { CreateBenchmarkDto } from './dto/create-benchmark.dto';
import { UpdateBenchmarkDto } from './dto/update-benchmark.dto';

@Injectable()
export class BenchmarksService {
  create(createBenchmarkDto: CreateBenchmarkDto) {
    return 'This action adds a new benchmark';
  }

  findAll() {
    return `This action returns all benchmarks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} benchmark`;
  }

  update(id: number, updateBenchmarkDto: UpdateBenchmarkDto) {
    return `This action updates a #${id} benchmark`;
  }

  remove(id: number) {
    return `This action removes a #${id} benchmark`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateBenchmarkOperationDto } from './dto/create-benchmark-operation.dto';
import { UpdateBenchmarkOperationDto } from './dto/update-benchmark-operation.dto';

@Injectable()
export class BenchmarkOperationsService {
  create(createBenchmarkOperationDto: CreateBenchmarkOperationDto) {
    return 'This action adds a new benchmarkOperation';
  }

  findAll() {
    return `This action returns all benchmarkOperations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} benchmarkOperation`;
  }

  update(id: number, updateBenchmarkOperationDto: UpdateBenchmarkOperationDto) {
    return `This action updates a #${id} benchmarkOperation`;
  }

  remove(id: number) {
    return `This action removes a #${id} benchmarkOperation`;
  }
}

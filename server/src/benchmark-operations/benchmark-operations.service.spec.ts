import { Test, TestingModule } from '@nestjs/testing';
import { BenchmarkOperationsService } from './benchmark-operations.service';

describe('BenchmarkOperationsService', () => {
  let service: BenchmarkOperationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BenchmarkOperationsService],
    }).compile();

    service = module.get<BenchmarkOperationsService>(BenchmarkOperationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

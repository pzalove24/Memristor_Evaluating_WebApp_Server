import { Test, TestingModule } from '@nestjs/testing';
import { BenchmarksService } from './benchmarks.service';

describe('BenchmarksService', () => {
  let service: BenchmarksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BenchmarksService],
    }).compile();

    service = module.get<BenchmarksService>(BenchmarksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

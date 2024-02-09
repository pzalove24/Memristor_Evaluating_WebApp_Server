import { Test, TestingModule } from '@nestjs/testing';
import { BenchmarkSetupsService } from './benchmark-setups.service';

describe('BenchmarkSetupsService', () => {
  let service: BenchmarkSetupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BenchmarkSetupsService],
    }).compile();

    service = module.get<BenchmarkSetupsService>(BenchmarkSetupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

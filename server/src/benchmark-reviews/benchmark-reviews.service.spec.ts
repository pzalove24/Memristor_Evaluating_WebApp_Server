import { Test, TestingModule } from '@nestjs/testing';
import { BenchmarkReviewsService } from './benchmark-reviews.service';

describe('BenchmarkReviewsService', () => {
  let service: BenchmarkReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BenchmarkReviewsService],
    }).compile();

    service = module.get<BenchmarkReviewsService>(BenchmarkReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

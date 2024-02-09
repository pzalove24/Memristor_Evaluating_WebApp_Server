import { Test, TestingModule } from '@nestjs/testing';
import { BenchmarkReviewsController } from './benchmark-reviews.controller';
import { BenchmarkReviewsService } from './benchmark-reviews.service';

describe('BenchmarkReviewsController', () => {
  let controller: BenchmarkReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BenchmarkReviewsController],
      providers: [BenchmarkReviewsService],
    }).compile();

    controller = module.get<BenchmarkReviewsController>(BenchmarkReviewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { BenchmarksController } from './benchmarks.controller';
import { BenchmarksService } from './benchmarks.service';

describe('BenchmarksController', () => {
  let controller: BenchmarksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BenchmarksController],
      providers: [BenchmarksService],
    }).compile();

    controller = module.get<BenchmarksController>(BenchmarksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { BenchmarkOperationsController } from './benchmark-operations.controller';
import { BenchmarkOperationsService } from './benchmark-operations.service';

describe('BenchmarkOperationsController', () => {
  let controller: BenchmarkOperationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BenchmarkOperationsController],
      providers: [BenchmarkOperationsService],
    }).compile();

    controller = module.get<BenchmarkOperationsController>(BenchmarkOperationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

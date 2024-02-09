import { Test, TestingModule } from '@nestjs/testing';
import { BenchmarkSetupsController } from './benchmark-setups.controller';
import { BenchmarkSetupsService } from './benchmark-setups.service';

describe('BenchmarkSetupsController', () => {
  let controller: BenchmarkSetupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BenchmarkSetupsController],
      providers: [BenchmarkSetupsService],
    }).compile();

    controller = module.get<BenchmarkSetupsController>(BenchmarkSetupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

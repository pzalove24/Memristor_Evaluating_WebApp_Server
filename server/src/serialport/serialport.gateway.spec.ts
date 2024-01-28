import { Test, TestingModule } from '@nestjs/testing';
import { SerialportGateway } from './serialport.gateway';
import { SerialportService } from './serialport.service';

describe('SerialportGateway', () => {
  let gateway: SerialportGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SerialportGateway, SerialportService],
    }).compile();

    gateway = module.get<SerialportGateway>(SerialportGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

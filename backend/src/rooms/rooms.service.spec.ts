import { Test, TestingModule } from '@nestjs/testing';
import { RoomsService } from './rooms.service';

describe('MessagesService', () => {
  let service: RoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomsService],
    }).compile();

    service = module.get<RoomsService>(RoomsService);
  });

  it('definir...', () => {
    expect(service).toBeDefined();
  });
});

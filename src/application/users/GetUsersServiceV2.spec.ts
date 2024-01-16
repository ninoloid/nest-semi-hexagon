import { Test, TestingModule } from '@nestjs/testing';
import { GetUsersServiceV2 } from './GetUsersServiceV2';
import { IGetUsersRepository } from '../../domain/users/repositories/IGetUsersRepository';

describe('GetUsersServiceV2', () => {
  let service: GetUsersServiceV2;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetUsersServiceV2,
        {
          provide: IGetUsersRepository,
          useValue: {
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<GetUsersServiceV2>(GetUsersServiceV2);
  });

  describe('findAll', () => {
    it('Should return users', async () => {
      const result = await service.findAll();
      expect(result).toStrictEqual([]);
    });
  });
});

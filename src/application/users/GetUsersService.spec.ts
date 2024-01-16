import { Test, TestingModule } from '@nestjs/testing';
import { GetUsersService } from './GetUsersService';
import { IGetUsersRepository } from '../../domain/users/repositories/IGetUsersRepository';

describe('GetUsersService', () => {
  let service: GetUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetUsersService,
        {
          provide: IGetUsersRepository,
          useValue: {
            find: jest
              .fn()
              .mockResolvedValue([
                { id: 1, firstName: 'Ahmad', lastName: 'Adiputra' },
              ]),
          },
        },
      ],
    }).compile();

    service = module.get<GetUsersService>(GetUsersService);
  });

  describe('findAll', () => {
    it('Should return users', async () => {
      const result = await service.findAll();
      expect(result).toStrictEqual([
        {
          id: 1,
          firstName: 'Ahmad',
          lastName: 'Adiputra',
        },
      ]);
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { GetUsersRepositoryV2 } from './GetUsersRepositoryV2';
import { User } from '../../../domain/users/entities/users.entity';

describe('GetUsersRepository', () => {
  let repository: GetUsersRepositoryV2;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetUsersRepositoryV2,
        {
          provide: getRepositoryToken(User),
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

    repository = module.get<GetUsersRepositoryV2>(GetUsersRepositoryV2);
  });

  describe('find', () => {
    it('Should return users', async () => {
      const users = {
        id: 1,
        firstName: 'Ahmad',
        lastName: 'Adiputra',
      };

      const result = await repository.find();
      expect(result).toStrictEqual([users, users, users]);
    });
  });
});

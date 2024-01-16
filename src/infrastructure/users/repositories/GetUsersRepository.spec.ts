import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { GetUsersRepository } from './GetUsersRepository';
import { User } from '../../../domain/users/entities/users.entity';

describe('GetUsersRepository', () => {
  let repository: GetUsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetUsersRepository,
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

    repository = module.get<GetUsersRepository>(GetUsersRepository);
  });

  describe('find', () => {
    it('Should return users', async () => {
      const result = await repository.find();
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

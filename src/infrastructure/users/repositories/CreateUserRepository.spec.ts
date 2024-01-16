import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../../../domain/users/entities/users.entity';
import { CreateUserRepository } from './CreateUserRepository';
import { CreateUserDto } from '../../../application/users/dtos/CreateUserDto';

describe('CreateUserRepository', () => {
  let repository: CreateUserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserRepository,
        {
          provide: getRepositoryToken(User),
          useValue: {
            save: jest.fn().mockResolvedValue({
              id: 1,
              firstName: 'Ahmad',
              lastName: 'Adiputra',
            }),
          },
        },
      ],
    }).compile();

    repository = module.get<CreateUserRepository>(CreateUserRepository);
  });

  describe('save', () => {
    it('Should return saved user', async () => {
      const createUserInput: CreateUserDto = {
        firstName: 'Ahmad',
        lastName: 'Adiputra',
      };

      const result = await repository.save(createUserInput);
      expect(result).toStrictEqual({
        id: 1,
        firstName: 'Ahmad',
        lastName: 'Adiputra',
      });
    });
  });
});

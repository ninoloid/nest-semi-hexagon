import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserService } from './CreateUserService';
import { CreateUserDto } from './dtos/CreateUserDto';
import { ICreateUserRepository } from '../../domain/users/repositories/ICreateUserRepository';

describe('CreateUserService', () => {
  let service: CreateUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserService,
        {
          provide: ICreateUserRepository,
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

    service = module.get<CreateUserService>(CreateUserService);
  });

  describe('create', () => {
    it('Should return saved user', async () => {
      const createUserInput: CreateUserDto = {
        firstName: 'Ahmad',
        lastName: 'Adiputra',
      };

      const result = await service.create(createUserInput);
      expect(result).toStrictEqual({
        id: 1,
        firstName: 'Ahmad',
        lastName: 'Adiputra',
      });
    });
  });
});

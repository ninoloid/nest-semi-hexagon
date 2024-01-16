import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserController } from './CreateUserController';
import { ICreateUserService } from '../../../domain/users/interfaces/ICreateUserService';
import { CreateUserDto } from '../../../application/users/dtos/CreateUserDto';

describe('CreateUserController', () => {
  let controller: CreateUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserController,
        {
          provide: ICreateUserService,
          useValue: {
            create: jest.fn().mockResolvedValue({
              id: 1,
              firstName: 'Ahmad',
              lastName: 'Adiputra',
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<CreateUserController>(CreateUserController);
  });

  describe('find', () => {
    it('Should return users', async () => {
      const createUserInput: CreateUserDto = {
        firstName: 'Ahmad',
        lastName: 'Adiputra',
      };

      const result = await controller.createUser(createUserInput);
      expect(result).toStrictEqual({
        code: 201,
        message: 'Success',
        data: {
          id: 1,
          firstName: 'Ahmad',
          lastName: 'Adiputra',
        },
      });
    });
  });
});

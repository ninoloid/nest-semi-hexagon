import { Test, TestingModule } from '@nestjs/testing';
import { GetUsersController } from './GetUsersController';
import { IGetUsersService } from '../../../domain/users/interfaces/IGetUsersService';

describe('GetUsersController', () => {
  let controller: GetUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetUsersController,
        {
          provide: IGetUsersService,
          useValue: {
            findAll: jest
              .fn()
              .mockResolvedValue([
                { id: 1, firstName: 'Ahmad', lastName: 'Adiputra' },
              ]),
          },
        },
      ],
    }).compile();

    controller = module.get<GetUsersController>(GetUsersController);
  });

  describe('find', () => {
    it('Should return users', async () => {
      const result = await controller.getUsers();
      expect(result).toStrictEqual({
        code: 200,
        message: 'Success',
        data: [
          {
            id: 1,
            firstName: 'Ahmad',
            lastName: 'Adiputra',
          },
        ],
      });
    });
  });
});

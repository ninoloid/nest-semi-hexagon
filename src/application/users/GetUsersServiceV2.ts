import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/users/entities/users.entity';
import { IGetUsersService } from '../../domain/users/interfaces/IGetUsersService';
import { IGetUsersRepository } from '../../domain/users/repositories/IGetUsersRepository';

@Injectable()
export class GetUsersServiceV2 implements IGetUsersService {
  constructor(
    @Inject(IGetUsersRepository)
    private readonly getUsersRepository: IGetUsersRepository,
  ) {}

  async findAll(): Promise<User[]> {
    console.log('Get user service v2');
    return [];
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/users/entities/users.entity';
import { ICreateUserService } from '../../domain/users/interfaces/ICreateUserService';
import { ICreateUserRepository } from '../../domain/users/repositories/ICreateUserRepository';
import { CreateUserDto } from './dtos/CreateUserDto';

@Injectable()
export class CreateUserService implements ICreateUserService {
  constructor(
    @Inject(ICreateUserRepository)
    private readonly createUserRepository: ICreateUserRepository,
  ) {}

  async create(usersInput: CreateUserDto): Promise<User> {
    return await this.createUserRepository.save(usersInput);
  }
}

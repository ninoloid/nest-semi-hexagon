import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IGetUsersRepository } from 'src/domain/users/repositories/IGetUsersRepository';
import { User } from '../../../domain/users/entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GetUsersRepositoryV2 implements IGetUsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async find() {
    const users = await this.userRepository.find();

    return [...users, ...users, ...users];
  }
}

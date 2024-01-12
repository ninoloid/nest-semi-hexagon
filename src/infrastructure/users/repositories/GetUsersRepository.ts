import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IGetUsersRepository } from 'src/domain/users/repositories/IGetUsersRepository';
import { User } from '../../../domain/users/entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GetUsersRepository implements IGetUsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async find() {
    return this.userRepository.find();
  }
}

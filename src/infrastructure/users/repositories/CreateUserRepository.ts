import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../../domain/users/entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../../../application/users/dtos/CreateUserDto';
import { ICreateUserRepository } from '../../../domain/users/repositories/ICreateUserRepository';

@Injectable()
export class CreateUserRepository implements ICreateUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async save(usersInput: CreateUserDto) {
    return this.userRepository.save(usersInput);
  }
}

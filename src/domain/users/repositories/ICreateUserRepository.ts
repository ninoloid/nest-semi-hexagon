import { CreateUserDto } from 'src/application/users/dtos/CreateUserDto';
import { User } from '../entities/users.entity';

export interface ICreateUserRepository {
  save(usersInput: CreateUserDto): Promise<User>;
}

export const ICreateUserRepository = Symbol('ICreateUserRepository');

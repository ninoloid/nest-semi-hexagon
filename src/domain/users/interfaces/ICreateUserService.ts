import { CreateUserDto } from '../../../application/users/dtos/CreateUserDto';
import { User } from '../entities/users.entity';

export interface ICreateUserService {
  create(usersInput: CreateUserDto): Promise<User>;
}

export const ICreateUserService = Symbol('ICreateUserService');

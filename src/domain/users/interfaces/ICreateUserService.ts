import { User } from '../entities/users.entity';

export interface ICreateUserService {
  create(usersInput): Promise<User>;
}

export const ICreateUserService = Symbol('ICreateUserService');

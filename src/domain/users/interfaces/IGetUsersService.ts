import { User } from '../entities/users.entity';

export interface IGetUsersService {
  findAll(): Promise<User[]>;
}

export const IGetUsersService = Symbol('IGetUsersService');

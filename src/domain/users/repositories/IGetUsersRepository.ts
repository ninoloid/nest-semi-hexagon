import { User } from '../entities/users.entity';

export interface IGetUsersRepository {
  find(): Promise<User[]>;
}

export const IGetUsersRepository = Symbol('IGetUsersRepository');

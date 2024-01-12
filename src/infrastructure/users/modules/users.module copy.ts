import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../../domain/users/entities/users.entity';
import { GetUsersController } from '../controllers/GetUsersController';
import { GetUsersService } from '../../../application/users/GetUsersService';
import { IGetUsersRepository } from '../../../domain/users/repositories/IGetUsersRepository';
import { IGetUsersService } from '../../../domain/users/interfaces/IGetUsersService';
import { GetUsersRepository } from '../repositories/GetUsersRepository';
import { ICreateUserRepository } from 'src/domain/users/repositories/ICreateUserRepository';
import { ICreateUserService } from 'src/domain/users/interfaces/ICreateUserService';
import { CreateUserService } from 'src/application/users/CreateUserService';
import { CreateUserController } from '../controllers/CreateUserController';
import { CreateUserRepository } from '../repositories/CreateUserRepository';

// kalau mau implement db lain, tinggal ganti classnya
import { GetUsersRepositoryV2 } from '../repositories/GetUsersRepositoryV2';

// kalau mau implement service atau dependency lain, tinggal ganti classnya
import { GetUsersServiceV2 } from '../../../application/users/GetUsersServiceV2';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [GetUsersController, CreateUserController],
  providers: [
    {
      provide: IGetUsersRepository,
      useClass: GetUsersRepository,
    },
    {
      provide: IGetUsersService,
      useClass: GetUsersService,
    },
    {
      provide: ICreateUserRepository,
      useClass: CreateUserRepository,
    },
    {
      provide: ICreateUserService,
      useClass: CreateUserService,
    },
  ],
})
export class UsersModule {}

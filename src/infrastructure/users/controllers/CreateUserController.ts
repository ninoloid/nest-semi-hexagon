import { Controller, Post, Body, HttpStatus, Inject } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { SUCCESS } from '../../../common/constants/response.constant';
import { Result } from '../../../common/helpers/result.helper';
import { User } from '../../../domain/users/entities/users.entity';
import { ICreateUserService } from '../../../domain/users/interfaces/ICreateUserService';
import { CreateUserDto } from '../../../application/users/dtos/CreateUserDto';
import { CreateUserResponse } from '../../../application/users/responses/CreateUserResponse';

@ApiTags('DB Boilerplate')
@Controller()
export class CreateUserController {
  constructor(
    @Inject(ICreateUserService)
    private readonly userService: ICreateUserService,
  ) {}

  @ApiCreatedResponse({
    description: 'The boilerplate entity that got created',
    type: User,
  })
  @Post('/')
  async createUser(
    @Body() usersInput: CreateUserDto,
  ): Promise<CreateUserResponse> {
    const result = await this.userService.create(usersInput);
    return new Result<User>().success(HttpStatus.CREATED, SUCCESS, result);
  }
}

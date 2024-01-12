import { Controller, Get, HttpStatus, Inject } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { SUCCESS } from '../../../common/constants/response.constant';
import { Result } from '../../../common/helpers/result.helper';
import { IGetUsersService } from '../../../domain/users/interfaces/IGetUsersService';
import { User } from '../../../domain/users/entities/users.entity';
import { GetUsersResponse } from '../../../application/users/responses/GetUsersResponse';

@ApiTags('DB Boilerplate')
@Controller()
export class GetUsersController {
  constructor(
    @Inject(IGetUsersService)
    private readonly getUsersService: IGetUsersService,
  ) {}

  @ApiOkResponse({
    status: 200,
    description: 'The resources were returned successfully',
    type: GetUsersResponse,
  })
  @Get('/')
  async getAllDbBoilerplateEntries(): Promise<GetUsersResponse> {
    const result = await this.getUsersService.findAll();

    return new Result<User[]>().success(HttpStatus.OK, SUCCESS, result);
  }
}

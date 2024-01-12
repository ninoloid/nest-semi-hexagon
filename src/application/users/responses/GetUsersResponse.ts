import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../../domain/users/entities/users.entity';

export class GetUsersResponse {
  @ApiProperty({
    description: 'HTTP Code',
    example: '200',
  })
  code: number;

  @ApiProperty({
    description: 'Message',
    example: 'Success',
  })
  message: string;

  @ApiProperty({
    description: 'Message',
    type: User,
    isArray: true,
  })
  data: User[];
}

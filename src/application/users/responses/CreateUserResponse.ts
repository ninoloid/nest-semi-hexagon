import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../../domain/users/entities/users.entity';

export class CreateUserResponse {
  @ApiProperty({
    description: 'HTTP Code',
    example: '201',
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
  })
  data: User;
}

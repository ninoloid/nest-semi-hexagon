import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'First name',
    example: 'First',
  })
  @IsNotEmpty()
  @Length(3, 255)
  firstName: string;

  @ApiProperty({
    description: 'Last Name',
    example: 'Last',
  })
  @IsNotEmpty()
  @Length(3, 255)
  lastName: string;
}

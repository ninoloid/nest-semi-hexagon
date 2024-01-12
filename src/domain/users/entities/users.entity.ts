import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @ApiProperty({ description: 'Primary key as ID', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'First Name',
    example: 'Namadepan',
  })
  @Column('varchar')
  firstName: string;

  @ApiProperty({
    description: 'Last Name',
    example: 'Namabelakang',
  })
  @Column('varchar')
  lastName: string;

  @ApiProperty({
    description: 'Created at',
    example: new Date(),
  })
  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @ApiProperty({
    description: 'Updated at',
    example: new Date(),
  })
  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt?: Date;
}

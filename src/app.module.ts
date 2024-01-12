import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'config/database';
import { internalRoutes } from './routes/default.routes';
import { UsersModule } from './infrastructure/users/modules/users.module';

const imports = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }),
  TypeOrmModule.forRootAsync({
    useClass: TypeOrmConfigService,
  }),
  RouterModule.register(internalRoutes),
  UsersModule,
];

@Module({
  imports,
  providers: [],
})
export class AppModule {}

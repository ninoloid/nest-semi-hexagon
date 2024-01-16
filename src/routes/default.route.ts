import { UsersModule } from '../infrastructure/users/modules/users.module';

export const internalRoutes = [
  {
    path: '/api',
    children: [
      {
        path: '/users',
        module: UsersModule,
      },
    ],
  },
];

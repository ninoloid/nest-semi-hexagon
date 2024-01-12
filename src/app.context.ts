import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configObj from '../config';
import { SentryService } from '@ntegral/nestjs-sentry';

let app: NestApplication = null;

export const applicationContext = async () => {
  const config = configObj[process.env.NODE_ENV];

  if (!app) {
    app = (await NestFactory.create(AppModule, {
      cors: true,
    })) as NestApplication;

    app.enableCors({
      origin: config.corsOrigin,
      exposedHeaders: config.corsHeaders,
    });

    app.useLogger(SentryService.SentryServiceInstance());
  }

  return app;
};

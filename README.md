# NestJS Service

NestJS services using REST API (both internal and external)

## Recipe

- Node v16 : [NVM](https://github.com/nvm-sh/nvm) or [Download](https://nodejs.org/en/download/)
- PostgreSQL vXX
- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

Create `.env` file in the root folder, and add this line

```
# GENERAL
NODE_ENV=development
APP_PORT=3000

# POSTGRESQL
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USER=
DATABASE_PASSWORD=

# ELASTIC APM
ELASTIC_APM_SERVICE_NAME=
ELASTIC_APM_SECRET_TOKEN=
ELASTIC_APM_SERVER_URL= http://apmserver:8200

# SENTRY
SENTRY_DSN=
```

<br/><br/>
Start application by running command

```
  docker-compose up
```

Your application should be running on `http://localhost:3000`

See Documentation by accessing
`http://localhost:3000/docs`
<br/><br/>

# Port Allocation

API Port

```
localhost:3000
```

Documentation

```
localhost:3000/docs
```

PostgreSQL

```
localhost:5432
```

Kibana

```
localhost:5601
```

<br/><br/>

# File Structure

The files are structured by domain/entity, but we use the word "modules" here for naming the parent folder as the modules are main gateway to the features.

```
.
├── config
│   ├── database.ts
│   ├── datasource.config.ts
│   ├── index.ts
│   └── migration.config.ts
├── database
│   └── migrations
│       ├── 1664964596944-dbBoilerplate.ts
│       └── ...OTHER_MIGRATIONS_IF_ANY
├── src
│   ├── main.ts
│   ├── app.context.ts
│   ├── app.module.ts
│   ├── apm
│   │   ├── apm.interceptor.ts
│   │   ├── apm.module.ts
│   │   ├── apm.service.ts
│   │   ├── index.ts
│   │   └── start.ts
│   ├── modules
│   │   ├── boilerplate
│   │   │   ├── boilerplate.module.ts
│   │   │   ├── controllers
│   │   │   │   ├── boilerplate.controller.ts
│   │   │   │   └── ...OTHER_CONTROLLERS_IF_ANY
│   │   │   └── services
│   │   │       ├── boilerplate.service.ts
│   │   │       └── ...OTHER_SERVICES_IF_ANY
│   │   ├── db-boilerplate
│   │   │   ├── db-boilerplate.module.ts
│   │   │   ├── dtos
│   │   │   │   └── create-db-boilerplate.service.ts
│   │   │   ├── responses
│   │   │   │   └── get-all-db-boilerplate.response.ts
│   │   │   ├── controllers
│   │   │   │   ├── create-db-boilerplate.controller.spec.ts
│   │   │   │   ├── create-db-boilerplate.controller.ts
│   │   │   │   ├── get-all-db-boilerplate.controller.spec.ts
│   │   │   │   ├── get-all-db-boilerplate.controller.ts
│   │   │   │   └── ...OTHER_CONTROLLERS_IF_ANY
│   │   │   ├── entities
│   │   │   │   ├── dbBoilerplate.entity.ts
│   │   │   │   └── ...OTHER_ENTITIES_IF_ANY
│   │   │   └── services
│   │   │       ├── create-db-boilerplate.service.spec.ts
│   │   │       ├── create-db-boilerplate.service.ts
│   │   │       ├── get-all-db-boilerplate.service.spec.ts
│   │   │       ├── get-all-db-boilerplate.service.ts
│   │   │       └── ...OTHER_SERVICES_IF_ANY
│   │   ├── index.ts
│   │   └── ...OTHER_MODULES_IF_ANY
│   ├── common
│   │   ├── constants
│   │   │   └── response.constant.ts
│   │   ├── helpers
│   │   ├── interceptors
│   │   └── libs
│   └── routes
│       ├── default.routes.ts
│       └── ...OTHER_ROUTERS_IF_ANY
├── test
│   ├── README.md
│   ├── app.e2e-spec.ts
│   ├── docker-compose.yml
│   ├── jest-e2e.json
│   └── run-test.sh
├── README.md
├── Dockerfile
├── docker-compose.yml
├── nest-cli.json
├── package-lock.json
├── package.json
├── tsconfig.build.json
└── tsconfig.json
```

<br/><br/>

# Integrated Features
 - NestJS Router
 - TypeORM
 - PostgreSQL
 - Sentry (with interceptor)
 - Elastic APM (with interceptor)
 - Swagger
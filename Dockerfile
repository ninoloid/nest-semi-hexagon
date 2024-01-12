FROM 985465380175.dkr.ecr.ap-southeast-1.amazonaws.com/node:18-alpine

COPY . /www/app
WORKDIR /www/app
RUN npm install

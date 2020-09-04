# CRUD API for Products
This is an API to be able to publish, edit and delete products on your website. This API has been created in Angular for the client and in NestJS + GraphQL on the server side.
## Install (with Docker)
### Requirements:
To use it we first need to install:
* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/).
* MySQL
### Usage
After installing docker and docker compose we can clone the repository and start it.
```
$ git clone https://github.com/znxr/crudapi-angular-nestjs.git
$ cd crudapi-angular-nestjs
$ docker-compose up
```
## Install (without Docker)
### Requirements:
To use it we first need to install:
* [Node.js](http://nodejs.org/)
* [NestJS CLI](https://docs.nestjs.com/#installation)
* [Angular CLI](https://angular.io/cli).
* MySQL

We can easily install NestJS CLI & Angular CLI with the following commands:
```
$ npm i -g @nestjs/cli
$ npm install -g @angular/cli
```
After installing NestJS and Angular we can clone the repository to be able to use it.
```
$ git clone https://github.com/znxr/crudapi-angular-nestjs.git
$ cd crudapi-angular-nestjs
```
### Usage
In order to start the project we will have to have two terminals open, one for the client and one for the server.

#### Client:
```
$ cd frontend
$ npm install
$ ng serve --open
```
#### Server:
```
$ cd backend
$ npm install
$ npm run start
```
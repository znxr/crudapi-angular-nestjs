import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductsModule } from './products/products.module';

@Module({
	imports: [
		ProductsModule,
		GraphQLModule.forRoot({
			autoSchemaFile: 'schema.gql'
		}),

		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'db',
			port: 3306,
			username: 'root',
			password: '123',
			database: 'invexidb',
			entities: ['dist/**/*.model.js'],
			synchronize: true,
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }

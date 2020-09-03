import { ProductsModel } from './products.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';


@Module({
	imports: [TypeOrmModule.forFeature([ProductsModel])],
	providers: [ProductsService, ProductsResolver],
	exports: [ProductsService]
})
export class ProductsModule {}

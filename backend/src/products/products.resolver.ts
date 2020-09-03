import { ProductsService } from './products.service';
import { ProductsModel } from './products.model';
import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject, NotFoundException } from '@nestjs/common';

@Resolver(of => ProductsModel)
export class ProductsResolver {
	constructor(@Inject(ProductsService) private productsService: ProductsService) { }

	@Query(returns => ProductsModel)
	async getProduct(@Args('id') id: number): Promise<ProductsModel> {
		return await this.productsService.findOne(id);
	}

	@Query(returns => [ProductsModel])
	async getProducts(): Promise<ProductsModel[]> {
		return await this.productsService.findAll();
	}

	@Mutation(returns => ProductsModel)
	async createProduct(
		@Args('name') name: string,
		@Args('image') image: string,
		@Args('price') price: number,
		@Args('color') color: string,
		@Args('length') length: number,
		@Args('size') size: string,
	): Promise<ProductsModel> {
		return await this.productsService.create({ name, image, price, color, length, size })
	}


	@Mutation(returns => ProductsModel)
	async updateProduct(
		@Args('id') id: number,
		@Args('name') name: string,
		@Args('image') image: string,
		@Args('price') price: number,
		@Args('color') color: string,
		@Args('length') length: number,
		@Args('size') size: string,
	): Promise<ProductsModel | null> {
		const product = await this.productsService.findOne(id);
		if (!product.id) {
			console.error("Product doesn't exist");
		}
		await this.productsService.update(id, {name, image, price, color, length, size});
		return await this.productsService.findOne(id);
	}

	@Mutation(returns => ProductsModel)
	async deleteProduct(
		@Args('id') id: number,
	): Promise<ProductsModel | any> {
		const product = await this.productsService.findOne(id);
		const deletedProduct = await this.productsService.delete(id);
		return product;
	}
}
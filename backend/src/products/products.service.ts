import { Injectable } from '@nestjs/common';
import { ProductsModel } from './products.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { ProductsDTO } from './products.dto';

@Injectable()
export class ProductsService {
	constructor(@InjectRepository(ProductsModel) private productsRepository: Repository<ProductsModel>) {}

	create(details: ProductsDTO): Promise<ProductsModel>{
		return this.productsRepository.save(details);
	}

	async update(id: number, newValue: ProductsDTO): Promise<ProductsModel> {
		const product = await this.productsRepository.findOneOrFail(id);
		if (!product.id) {
			console.error("Product doesn't exist");
		}
		await this.productsRepository.update(id, newValue);
		return await this.productsRepository.findOne(id);
	}

	async delete(id: number): Promise<any> {
		return await this.productsRepository.delete(id);
	}

	findAll(): Promise<ProductsModel[]> {
		return this.productsRepository.find();
	}

	findOne(id: number): Promise<ProductsModel> {
		return this.productsRepository.findOne(id);
	}
}

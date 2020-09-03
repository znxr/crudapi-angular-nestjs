import { ProductsModel } from './products.model';
import { Repository } from 'typeorm';
import { ProductsDTO } from './products.dto';
export declare class ProductsService {
    private productsRepository;
    constructor(productsRepository: Repository<ProductsModel>);
    create(details: ProductsDTO): Promise<ProductsModel>;
    update(id: number, newValue: ProductsDTO): Promise<ProductsModel>;
    delete(id: number): Promise<any>;
    findAll(): Promise<ProductsModel[]>;
    findOne(id: number): Promise<ProductsModel>;
}

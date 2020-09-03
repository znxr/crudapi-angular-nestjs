import { ProductsService } from './products.service';
import { ProductsModel } from './products.model';
export declare class ProductsResolver {
    private productsService;
    constructor(productsService: ProductsService);
    getProduct(id: number): Promise<ProductsModel>;
    getProducts(): Promise<ProductsModel[]>;
    createProduct(name: string, image: string, price: number, color: string, length: number, size: string): Promise<ProductsModel>;
    updateProduct(id: number, name: string, image: string, price: number, color: string, length: number, size: string): Promise<ProductsModel | null>;
    deleteProduct(id: number): Promise<ProductsModel | any>;
}

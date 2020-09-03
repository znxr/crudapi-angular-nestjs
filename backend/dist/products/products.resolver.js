"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsResolver = void 0;
const products_service_1 = require("./products.service");
const products_model_1 = require("./products.model");
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
let ProductsResolver = class ProductsResolver {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async getProduct(id) {
        return await this.productsService.findOne(id);
    }
    async getProducts() {
        return await this.productsService.findAll();
    }
    async createProduct(name, image, price, color, length, size) {
        return await this.productsService.create({ name, image, price, color, length, size });
    }
    async updateProduct(id, name, image, price, color, length, size) {
        const product = await this.productsService.findOne(id);
        if (!product.id) {
            console.error("Product doesn't exist");
        }
        await this.productsService.update(id, { name, image, price, color, length, size });
        return await this.productsService.findOne(id);
    }
    async deleteProduct(id) {
        const product = await this.productsService.findOne(id);
        const deletedProduct = await this.productsService.delete(id);
        return product;
    }
};
__decorate([
    graphql_1.Query(returns => products_model_1.ProductsModel),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "getProduct", null);
__decorate([
    graphql_1.Query(returns => [products_model_1.ProductsModel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "getProducts", null);
__decorate([
    graphql_1.Mutation(returns => products_model_1.ProductsModel),
    __param(0, graphql_1.Args('name')),
    __param(1, graphql_1.Args('image')),
    __param(2, graphql_1.Args('price')),
    __param(3, graphql_1.Args('color')),
    __param(4, graphql_1.Args('length')),
    __param(5, graphql_1.Args('size')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, String, Number, String]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "createProduct", null);
__decorate([
    graphql_1.Mutation(returns => products_model_1.ProductsModel),
    __param(0, graphql_1.Args('id')),
    __param(1, graphql_1.Args('name')),
    __param(2, graphql_1.Args('image')),
    __param(3, graphql_1.Args('price')),
    __param(4, graphql_1.Args('color')),
    __param(5, graphql_1.Args('length')),
    __param(6, graphql_1.Args('size')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, Number, String, Number, String]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "updateProduct", null);
__decorate([
    graphql_1.Mutation(returns => products_model_1.ProductsModel),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "deleteProduct", null);
ProductsResolver = __decorate([
    graphql_1.Resolver(of => products_model_1.ProductsModel),
    __param(0, common_1.Inject(products_service_1.ProductsService)),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsResolver);
exports.ProductsResolver = ProductsResolver;
//# sourceMappingURL=products.resolver.js.map
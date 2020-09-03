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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModel = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
let ProductsModel = class ProductsModel {
};
__decorate([
    graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProductsModel.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column({ length: 500, nullable: false }),
    __metadata("design:type", String)
], ProductsModel.prototype, "name", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column('text', { nullable: false }),
    __metadata("design:type", String)
], ProductsModel.prototype, "image", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column('integer', { nullable: false }),
    __metadata("design:type", Number)
], ProductsModel.prototype, "price", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column('text', { nullable: false }),
    __metadata("design:type", String)
], ProductsModel.prototype, "color", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column('integer', { nullable: false }),
    __metadata("design:type", Number)
], ProductsModel.prototype, "length", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column('text', { nullable: false }),
    __metadata("design:type", String)
], ProductsModel.prototype, "size", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ProductsModel.prototype, "created_at", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], ProductsModel.prototype, "updated_at", void 0);
ProductsModel = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity()
], ProductsModel);
exports.ProductsModel = ProductsModel;
//# sourceMappingURL=products.model.js.map
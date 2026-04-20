import { IProductRepository } from "../../domain/repositories/IProductRepository";
import { Product } from "../../domain/entities/product";

const PRODUCTS_LIMIT = 20;

export class GetProductsByCategoryUseCase {
    constructor(private productRepository: IProductRepository) { }

    async execute(category: string): Promise<Product[]> {
        return this.productRepository.getProductsByCategory(category, PRODUCTS_LIMIT);
    }
}
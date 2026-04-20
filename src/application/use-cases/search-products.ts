import { IProductRepository } from "../../domain/repositories/IProductRepository";
import { Product } from "../../domain/entities/product";

const PRODUCTS_LIMIT = 20;

export class SearchProductsUseCase {
    constructor(private productRepository: IProductRepository) { }

    async execute(query: string): Promise<Product[]> {
        return this.productRepository.searchProducts(query, PRODUCTS_LIMIT);
    }
}
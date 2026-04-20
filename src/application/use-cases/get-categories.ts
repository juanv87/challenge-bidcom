import { Category } from "@/src/domain/entities/category";
import { IProductRepository } from "../../domain/repositories/IProductRepository";

const CATEGORIES_LIMIT = 5;

export class GetCategoriesUseCase {
    constructor(private productRepository: IProductRepository) { }

    async execute(): Promise<Category[]> {
        const categories = await this.productRepository.getCategories();
        return categories.slice(0, CATEGORIES_LIMIT);
    }
}
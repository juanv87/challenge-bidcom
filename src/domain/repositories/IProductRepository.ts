import { Category } from "../entities/category";
import { Product } from "../entities/product";

export interface IProductRepository {
    searchProducts(query: string, limit: number): Promise<Product[]>;
    getCategories(): Promise<Category[]>;
    getProductsByCategory(category: string, limit: number): Promise<Product[]>;
}
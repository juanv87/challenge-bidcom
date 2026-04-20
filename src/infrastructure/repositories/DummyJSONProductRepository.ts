import { Category } from "@/src/domain/entities/category";
import { Product } from "@/src/domain/entities/product";
import { IProductRepository } from "@/src/domain/repositories/IProductRepository";
import { RawProduct, toProduct } from "../mappers/product.mapper";
import { RawCategory, toCategory } from "../mappers/category.mapper";

type SearchResponse = {
    products: RawProduct[];
    total: number;
    skip: number;
    limit: number;
}

const PRODUCT_SUMMARY_FIELDS = ["title", "price", "discountPercentage", "thumbnail", "sku"];

export class DummyJSONProductRepository implements IProductRepository {
    async searchProducts(query: string, limit: number): Promise<Product[]> {
        try {
            const fields = PRODUCT_SUMMARY_FIELDS.join(",");
            const response = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=${limit}&select=${fields}`);
            const data: SearchResponse = await response.json();
            return data.products.map(toProduct);
        } catch (error) {
            console.error(error);
            throw new Error("Failed to fetch products")
        }
    }
    async getCategories(): Promise<Category[]> {
        try {
            const response = await fetch("https://dummyjson.com/products/categories", {
                cache: 'force-cache',
            });
            const data: RawCategory[] = await response.json();
            return data.map(toCategory);
        } catch (error) {
            console.error(error);
            throw new Error("Failed to fetch categories")
        }
    }
    async getProductsByCategory(category: string, limit: number): Promise<Product[]> {
        try {
            const fields = PRODUCT_SUMMARY_FIELDS.join(",");
            const response = await fetch(`https://dummyjson.com/products/category/${category}?limit=${limit}&select=${fields}`);
            const data: SearchResponse = await response.json();
            return data.products.map(toProduct);
        } catch (error) {
            console.error(error);
            throw new Error("Failed to fetch products by category")
        }
    }
}


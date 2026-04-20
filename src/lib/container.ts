import { GetCategoriesUseCase } from "../application/use-cases/get-categories";
import { GetProductsByCategoryUseCase } from "../application/use-cases/get-products-by-category";
import { SearchProductsUseCase } from "../application/use-cases/search-products";
import { DummyJSONProductRepository } from "../infrastructure/repositories/DummyJSONProductRepository";

const productRepository = new DummyJSONProductRepository();

export const searchProductsUseCase = new SearchProductsUseCase(productRepository);
export const getCategoriesUseCase = new GetCategoriesUseCase(productRepository);
export const getProductsByCategoryUseCase = new GetProductsByCategoryUseCase(productRepository);
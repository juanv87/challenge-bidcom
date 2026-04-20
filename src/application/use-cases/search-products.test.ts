import { IProductRepository } from "@/src/domain/repositories/IProductRepository";
import { SearchProductsUseCase } from "./search-products";
import { Product } from "@/src/domain/entities/product";

const mockRepository: IProductRepository = {
    searchProducts: jest.fn(),
    getCategories: jest.fn(),
    getProductsByCategory: jest.fn(),
};

describe("SearchProductsUseCase", () => {
    let useCase: SearchProductsUseCase;

    beforeEach(() => {
        useCase = new SearchProductsUseCase(mockRepository);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return products when search is successful", async () => {
        const query = "test";
        const products: Product[] = [
            {
                id: 1,
                sku: "TEST-SKU",
                title: "Test Product",
                price: 100,
                discountPercentage: 10.5,
                thumbnail: "test.jpg",
                discountedPrice: 90,
            },
        ];

        (mockRepository.searchProducts as jest.Mock).mockResolvedValue(products);

        const result = await useCase.execute(query);

        expect(result).toEqual(products);
        expect(mockRepository.searchProducts).toHaveBeenCalledWith(query, 20);
    });
});
import { IProductRepository } from "@/src/domain/repositories/IProductRepository";
import { GetProductsByCategoryUseCase } from "./get-products-by-category";
import { Product } from "@/src/domain/entities/product";

const mockRepository: IProductRepository = {
    searchProducts: jest.fn(),
    getCategories: jest.fn(),
    getProductsByCategory: jest.fn(),
};

describe("GetProductsByCategoryUseCase", () => {
    let useCase: GetProductsByCategoryUseCase;

    beforeEach(() => {
        useCase = new GetProductsByCategoryUseCase(mockRepository);
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

        (mockRepository.getProductsByCategory as jest.Mock).mockResolvedValue(products);

        const result = await useCase.execute(query);

        expect(result).toEqual(products);
        expect(mockRepository.getProductsByCategory).toHaveBeenCalledWith(query, 20);
    });
});
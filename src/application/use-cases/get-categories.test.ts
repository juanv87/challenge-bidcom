import { IProductRepository } from "@/src/domain/repositories/IProductRepository";
import { GetCategoriesUseCase } from "./get-categories";

const mockRepository: IProductRepository = {
    searchProducts: jest.fn(),
    getCategories: jest.fn(),
    getProductsByCategory: jest.fn(),
};

describe("GetCategoriesUseCase", () => {
    let useCase: GetCategoriesUseCase;

    beforeEach(() => {
        useCase = new GetCategoriesUseCase(mockRepository);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return the first 5 categories when there are more than 5", async () => {
        const categories = [
            { slug: "category-1", name: "Category 1" },
            { slug: "category-2", name: "Category 2" },
            { slug: "category-3", name: "Category 3" },
            { slug: "category-4", name: "Category 4" },
            { slug: "category-5", name: "Category 5" },
            { slug: "category-6", name: "Category 6" },
            { slug: "category-7", name: "Category 7" },
            { slug: "category-8", name: "Category 8" },
            { slug: "category-9", name: "Category 9" },
            { slug: "category-10", name: "Category 10" },
        ];

        (mockRepository.getCategories as jest.Mock).mockResolvedValue(categories);

        const result = await useCase.execute();

        expect(result).toHaveLength(5);
        expect(result).toEqual(categories.slice(0, 5));
    });

    it("should return an empty array when there are no categories", async () => {
        (mockRepository.getCategories as jest.Mock).mockResolvedValue([]);

        const result = await useCase.execute();

        expect(result).toEqual([]);
    });

    it("should return all categories when there are less than 5", async () => {
        const categories = [
            { slug: "category-1", name: "Category 1" },
            { slug: "category-2", name: "Category 2" },
            { slug: "category-3", name: "Category 3" },
        ];

        (mockRepository.getCategories as jest.Mock).mockResolvedValue(categories);

        const result = await useCase.execute();

        expect(result).toHaveLength(3);
        expect(result).toEqual(categories);
    });
});
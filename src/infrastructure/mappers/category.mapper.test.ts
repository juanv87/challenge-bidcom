import { RawCategory, toCategory } from "./category.mapper";

describe("Category Mapper", () => {
    it("should map a raw category to a category entity", () => {
        const raw: RawCategory = {
            slug: "test-category",
            name: "Test Category",
        };

        const result = toCategory(raw);

        expect(result.name).toBe("Test Category");
        expect(result.slug).toBe("test-category");
    });

    it("should handle empty strings", () => {
        const raw: RawCategory = {
            slug: "",
            name: "",
        };

        const result = toCategory(raw);

        expect(result.name).toBe("");
        expect(result.slug).toBe("");
    });
});
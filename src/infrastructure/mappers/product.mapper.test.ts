import { toProduct, RawProduct } from "./product.mapper";

describe("Product Mapper", () => {
    it("should map a raw product to a product entity and round the discounted price", () => {
        const raw: RawProduct = {
            id: 1,
            sku: "TEST-SKU",
            title: "Test Product",
            price: 100,
            discountPercentage: 10.5,
            thumbnail: "test.jpg",
        };

        const result = toProduct(raw);

        expect(result.id).toBe(1);
        expect(result.finalPrice).toBe(89.5);
    });

    it("should avoid long floating point values", () => {
        const raw: RawProduct = {
            id: 1,
            sku: "TEST-SKU",
            title: "Test Product",
            price: 16.29,
            discountPercentage: 1.25,
            thumbnail: "test.jpg",
        };

        const result = toProduct(raw);
        expect(result.finalPrice).toBe(16.09);
    });
});

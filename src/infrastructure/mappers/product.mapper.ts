import { Product } from "@/src/domain/entities/product";

export type RawProduct = {
    id: number;
    sku: string;
    title: string;
    price: number;
    discountPercentage: number;
    thumbnail: string;
}

export function toProduct(raw: RawProduct): Product {
    return {
        id: raw.id,
        sku: raw.sku,
        title: raw.title,
        price: raw.price,
        discountPercentage: raw.discountPercentage,
        finalPrice: Number(Math.round((raw.price - (raw.price * raw.discountPercentage / 100)) * 100) / 100),
        thumbnail: raw.thumbnail,
    }
}

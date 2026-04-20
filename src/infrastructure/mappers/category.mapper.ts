import { Category } from "@/src/domain/entities/category";

export type RawCategory = {
    slug: string;
    name: string;
}

export function toCategory(raw: RawCategory): Category {
    return {
        slug: raw.slug,
        name: raw.name,
    }
}
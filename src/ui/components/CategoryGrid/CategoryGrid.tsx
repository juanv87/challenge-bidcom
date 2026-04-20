import { CategoryCard } from "../CategoryCard/CategoryCard"
import { Category } from "@/src/domain/entities/category";

export const CategoryGrid = ({ categories }: { categories: Category[] }) => {
    return (
        <ul className="flex flex-row gap-4 gap-y-2 flex-wrap justify-center max-w-[800px]">
            {categories.map((category) => (
                <li key={category.slug}>
                    <CategoryCard category={category} />
                </li>
            ))}
        </ul>
    )
}
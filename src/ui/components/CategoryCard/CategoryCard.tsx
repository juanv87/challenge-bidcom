import { Category } from "@/src/domain/entities/category";
import Link from "next/link";

export const CategoryCard = ({ category }: { category: Category }) => {
    return (
        <Link className="rounded-full border border-primary hover:bg-primary hover:text-white transition-colors duration-300 flex flex-col items-center w-full my-2 py-2 px-4" href={`/category/${category.slug}`}>
            <h3 className="uppercase font-semibold">{category.name}</h3>
        </Link>
    );
}
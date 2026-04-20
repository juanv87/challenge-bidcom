import { Category } from "@/src/domain/entities/category";
import { CategoryGrid } from "../CategoryGrid/CategoryGrid";

export const EmptyState = ({ categories }: { categories: Category[] }) => {
    return (
        <div className="flex flex-col h-[calc(100vh-100px)] items-center justify-center gap-4 p-4">
            <h1 className="text-center">No se encontró ningún producto. Te recomendamos buscar estas categorías</h1>
            <CategoryGrid categories={categories} />
        </div>
    );
}
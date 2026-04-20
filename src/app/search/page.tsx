import { getCategoriesUseCase, searchProductsUseCase } from "@/src/lib/container";
import { EmptyState } from "@/src/ui/components/EmptyState/EmptyState";
import { ProductGrid } from "@/src/ui/components/ProductGrid/ProductGrid";
import { redirect } from "next/navigation";

export const generateMetadata = async ({ searchParams }: { searchParams: { s: string } }) => {
    const query = (await searchParams).s;
    return {
        title: query + " - Bidcom Challenge Frontend",
    };
}

export default async function SearchPage({ searchParams }: { searchParams: { s: string } }) {

    const query = (await searchParams).s;

    if (!query) redirect("/");

    const [products, categories] = await Promise.all([
        searchProductsUseCase.execute(query),
        getCategoriesUseCase.execute()
    ]);

    if (products.length === 0) return <EmptyState categories={categories} />;

    return <ProductGrid products={products} />;
}
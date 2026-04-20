import { getCategoriesUseCase, getProductsByCategoryUseCase } from "@/src/lib/container";
import { EmptyState } from "@/src/ui/components/EmptyState/EmptyState";
import { ProductGrid } from "@/src/ui/components/ProductGrid/ProductGrid";

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
    const categorySlug = (await params).slug;
    return {
        title: categorySlug + " - Bidcom Challenge Frontend",
    };
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {

    const categorySlug = (await params).slug;

    const [products, categories] = await Promise.all([
        getProductsByCategoryUseCase.execute(categorySlug),
        getCategoriesUseCase.execute()
    ]);

    if (products.length === 0) return <EmptyState categories={categories} />;

    return (
        <>
            <div className="container mx-auto mt-4">
                <h1 className="text-lg text-center md:text-left">Categoría: {categorySlug}</h1>
            </div>
            <ProductGrid products={products} />
        </>
    );
}
import { Product } from "@/src/domain/entities/product";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductGrid = ({ products }: { products: Product[] }) => {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {products.map((product) => (
                <li key={product.id} className="border border-gray-200 rounded-lg p-4">
                    <ProductCard product={product} />
                </li>
            ))}
        </ul>
    );
}
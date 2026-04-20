import { Product } from "@/src/domain/entities/product";
import Image from "next/image";
import Link from "next/link";

export const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Link className="w-full flex flex-col items-center" href={`/product/${product.sku}`}>
            <div className="border-gray-200 border-b flex flex-col items-center w-full my-2 py-2">
                <Image className="w-48 h-48" src={product.thumbnail} alt={product.title} width={192} height={192} />
            </div>
            <h3>{product.title}</h3>
            {product.discountPercentage > 0 && (
                <p className="text-price line-through">${product.price}</p>
            )}
            {product.discountPercentage > 0 && (
                <p className="text-discount text-sm">{product.discountPercentage}% OFF</p>
            )}
            <p className="text-[20px]">${product.finalPrice}</p>
        </Link>
    );
}
import { cacheLife } from "next/cache";
import { searchProductsUseCase } from "../lib/container";
import { ProductGrid } from "../ui/components/ProductGrid/ProductGrid";

export default async function Home() {

  'use cache'
  cacheLife('hours');

  const products = await searchProductsUseCase.execute("");

  return <ProductGrid products={products} />
}
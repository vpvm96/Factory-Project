import { getProductsService } from "@/service/products";

import MoreProductButton from "./MoreProductButton";
import ProductsGrid from "./ProductsGrid";

export default async function ProductsSection() {
  const products = await getProductsService();

  return (
    <section className="my-4">
      <h2 className="my-2 text-center text-2xl font-bold">Production</h2>
      <ProductsGrid products={products} />
      <MoreProductButton />
    </section>
  );
}

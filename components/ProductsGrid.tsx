import { Products } from "@/service/products";

import ContentCard from "./ContentCard";

type Props = {
  products: Products[];
};

export default function ProductsGrid({ products }: Props) {
  return (
    <div className="gird-cols-1 grid gap-3 px-5 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ContentCard key={product.id} product={product} />
      ))}
    </div>
  );
}

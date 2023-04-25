import { Metadata } from "next";

import { getProductsService } from "@/service/products";

import FilterableProducts from "@/components/FilterableProducts";

export const metadata: Metadata = {
  title: "Factory Products",
  description: "Facotry Introudce All Products Page.",
};

export default async function ProductsPage() {
  const products = await getProductsService();
  const categories = [...new Set(products.map((product) => product.category))];

  return <FilterableProducts products={products} categories={categories} />;
}

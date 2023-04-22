"use client";

import { useState } from "react";

import { Products } from "@/service/products";

import Categories from "./Categories";
import ProductsGrid from "./ProductsGrid";

type Props = {
  products: Products[];
  categories: string[];
};

const ALL_PRODUCTS = "All";

export default function FilterableProducts({ products, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState(ALL_PRODUCTS);
  const filteredProducts =
    selectedCategory === ALL_PRODUCTS
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section>
      <Categories
        categories={[ALL_PRODUCTS, ...categories]}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductsGrid products={filteredProducts} />
    </section>
  );
}

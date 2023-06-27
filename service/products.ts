import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type Products = {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
  date: string;
};

// 모든 상품의 데이터
export const getProductsService = cache(async () => {
  const filePath = path.join(process.cwd(), "data", "products.json");

  return readFile(filePath, "utf-8")
    .then<Products[]>(JSON.parse)
    .then((product) => product.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

export async function getProductService(id: string) {
  const metadata = await getProductsService();

  return metadata.find((product: Products) => product.id === Number(id));
}

import { readFile } from "fs/promises";
import path from "path";

export type Products = {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  date: string;
};

// export type Product = Products & {  }

// 모든 상품의 데이터
export async function getProductsService(): Promise<Products[]> {
  const filePath = path.join(process.cwd(), "data", "products.json");

  return readFile(filePath, "utf-8")
    .then<Products[]>(JSON.parse)
    .then((product) => product.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getProductService(id: string) {
  const metadata = await getProductsService();

  return metadata.find((product) => product.id === Number(id));
}

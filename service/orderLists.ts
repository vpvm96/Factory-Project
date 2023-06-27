import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export interface OrderLists {
  id: number;
  storeName: string;
  description: string;
  socksList: SocksList[];
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}

interface SocksList {
  id: number;
  name: string;
  price: number;
  quntity: number;
}

// 모든 주문상품 데이터
export const getOrderListsService = cache(async () => {
  const filePath = path.join(process.cwd(), "data", "orderLists.json");

  return readFile(filePath, "utf-8")
    .then<OrderLists[]>(JSON.parse)
    .then((orderList) =>
      orderList.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
    );
});

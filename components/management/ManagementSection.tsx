"use client";

import { OrderLists } from "@/service/orderLists";
import { Products } from "@/service/products";

import InventoryList from "./InventoryList";
import OrderList from "./OrderList";
import OrderListDetail from "./OrderListDetail";
import ManagementChart from "./ManagementChart";

interface Props {
  orderLists: OrderLists[];
  products: Products[];
}

export default function ManagementSection({ orderLists, products }: Props) {
  return (
    <div className="flex flex-row gap-5 p-5">
      <div className="flex flex-col gap-5">
        <OrderList orderLists={orderLists} />
        <InventoryList products={products} />
      </div>
      <div className="w-full flex flex-col">
        <OrderListDetail />
        <ManagementChart />
      </div>
    </div>
  );
}

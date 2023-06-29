"use client";

import { useState } from "react";

import { OrderLists } from "@/service/orderLists";
import { Products } from "@/service/products";

import InventoryList from "./InventoryList";
import OrderList from "./OrderList";
import OrderListDetail from "./OrderListDetail";
import InventoryListAdmin from "./InventoryListAdmin";

interface Props {
  orderLists: OrderLists[];
  products: Products[];
}

export default function ManagementSection({ orderLists, products }: Props) {
  const [orderListDetail, setOrderListDetail] = useState<OrderLists>();
  const [inventoryClick, setInventoryClick] = useState<boolean>(false);

  const handleGetOrderListDetail = (item: OrderLists) => {
    setInventoryClick(false);
    setOrderListDetail(item);
  };

  return (
    <div className="flex h-screen flex-row gap-5 p-5">
      <div className="flex flex-col gap-5">
        <OrderList
          orderLists={orderLists}
          handleGetOrderListDetail={handleGetOrderListDetail}
        />
        <InventoryList
          products={products}
          setInventoryClick={setInventoryClick}
        />
      </div>
      <div className="w-full flex flex-col gap-10">
        {!inventoryClick && (
          <OrderListDetail orderListDetail={orderListDetail} />
        )}
        {inventoryClick && <InventoryListAdmin products={products} />}
      </div>
    </div>
  );
}

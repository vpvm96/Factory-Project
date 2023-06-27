import { OrderLists } from "@/service/orderLists";
import { Products } from "@/service/products";

import InventoryList from "./InventoryList";
import OrderList from "./OrderList";

interface Props {
  orderLists: OrderLists[];
  products: Products[];
}

export default function ManagementSection({ orderLists, products }: Props) {
  return (
    <div className="flex flex-col gap-5 p-5">
      <OrderList orderLists={orderLists} />
      <InventoryList products={products} />
    </div>
  );
}

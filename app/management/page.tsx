import { getOrderListsService } from "@/service/orderLists";
import { getProductsService } from "@/service/products";

import ManagementSection from "@/components/management/ManagementSection";

export default async function ManagementPage() {
  const [orderLists, products] = await Promise.all([
    getOrderListsService(),
    getProductsService(),
  ]);

  return (
    <main className="bg-manage-color">
      <ManagementSection orderLists={orderLists} products={products} />
    </main>
  );
}

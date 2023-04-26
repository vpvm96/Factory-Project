import InventoryList from "./InventoryList";
import OrderList from "./OrderList";

export default function ManagementSection() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <OrderList />
      <InventoryList />
    </div>
  );
}

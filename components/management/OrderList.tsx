import { useModal, useForm } from "@/hooks";
import { OrderLists } from "@/service/orderLists";

import AddManageButton from "./AddManageButton";
import OrderListModal from "./OrderListModal";

interface Props {
  orderLists: OrderLists[];
  handleGetOrderListDetail: (item: OrderLists) => void;
}

export interface OrderListFormValue {
  storeName: string;
  totalPrice: string;
  description: string;
}

export default function OrderList({
  orderLists,
  handleGetOrderListDetail,
}: Props) {
  const { isOpen, openModal, closeModal } = useModal();
  const { formData, handleChange, handleSubmit } = useForm<OrderListFormValue>(
    {
      storeName: "",
      totalPrice: "",
      description: "",
    },
    closeModal
  );

  return (
    <>
      <section className="flex h-2/3 w-full max-w-md flex-col gap-4 rounded-md bg-white px-5 py-3 shadow-md hover:shadow-xl">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-bold">상품 주문 리스트</h2>
          <AddManageButton buttonName="주문 관리" clickEvent={openModal} />
        </div>
        <div className="flex flex-col h-2/3 gap-4 overflow-scroll">
          {orderLists.map((item) => (
            <div
              key={item.id}
              onClick={() => handleGetOrderListDetail(item)}
              className="flex flex-row w-full gap-4 border-b-2 border-black pb-2 items-center hover:cursor-pointer hover:bg-gray-100"
            >
              <h4
                className={`${
                  item.storeName.length > 6 ? "w-16" : "w-auto"
                } truncate`}
                style={{ width: "6rem" }}
              >
                {item.storeName}
              </h4>
              <p
                className={`${
                  item.description.length > 15 ? "w-24" : "w-auto"
                } truncate`}
                style={{ width: "12rem" }}
              >
                {item.description}
              </p>
              <p className="w-8">MEX$</p>
              <p className="w-16">
                {item.totalPrice > 1000000
                  ? (item.totalPrice / 1000000).toFixed(2) + "M"
                  : item.totalPrice.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-semibold">총 주문 건수</p>
          <p>{orderLists.length}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-semibold">총 주문 금액</p>
          <p>
            MEX$&nbsp;
            {orderLists
              .reduce((acc, { totalPrice }) => acc + totalPrice, 0)
              .toLocaleString()}
          </p>
        </div>
      </section>
      <OrderListModal
        isOpen={isOpen}
        closeModal={closeModal}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

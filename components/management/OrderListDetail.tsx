import { OrderLists } from "@/service/orderLists";

interface Props {
  orderListDetail?: OrderLists;
}

export default function OrderListDetail({ orderListDetail }: Props) {
  if (!orderListDetail) return null;

  const { storeName, totalPrice, description, createdAt } = orderListDetail;

  return (
    <section className="w-full justify-center rounded-md bg-white px-5 py-3 shadow-md hover:shadow-xl">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold">상품 주문 상세 정보</h2>
        <p className="mr-10 text-l">{createdAt}</p>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <p>납품 가게 정보</p>
        <p>{storeName}</p>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <p>납품 가게 특이사항</p>
        <p>{description}</p>
      </div>
      <div className="mt-5 mr-10 flex flex-col items-end gap-3">
        <p>주문 금액</p>
        <p>MEX$ {totalPrice.toLocaleString()}</p>
      </div>
      <div className="mt-10 mr-10 flex flex-row gap-3 justify-end">
        <button>수정</button>
        <button>삭제</button>
      </div>
    </section>
  );
}

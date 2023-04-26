import AddManageButton from "./AddManageButton";

export default function OrderList() {
  return (
    <section className="flex h-96 w-full max-w-md flex-col justify-center gap-4 rounded-md bg-white px-5 py-3 shadow-md hover:shadow-xl">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold">상품 주문 리스트</h2>
        <AddManageButton buttonName="주문 관리" />
      </div>
      <div className="flex flex-col gap-4 overflow-scroll">
        {new Array(8).fill(0).map((_, index) => (
          <div
            key={index}
            className="flex flex-row justify-between border-b-2 border-black pb-2"
          >
            <h4>양말 이름</h4>
            <p>시장 이름 시장 이름 시장 이름</p>
            <p>2500000</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between">
        <p className="font-semibold">총 주문 건수</p>
        <p>20</p>
      </div>
      <div className="flex flex-row justify-between">
        <p className="font-semibold">총 주문 금액</p>
        <p>50000</p>
      </div>
    </section>
  );
}

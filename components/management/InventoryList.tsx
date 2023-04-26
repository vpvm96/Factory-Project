import AddManageButton from "./AddManageButton";

export default function InventoryList() {
  return (
    <section className="flex h-64 w-full max-w-md flex-col justify-center gap-4 rounded-md bg-white px-5 py-3 shadow-md hover:shadow-xl">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold">재고 리스트</h2>
        <AddManageButton buttonName="재고 관리" />
      </div>
      <div className="flex flex-col gap-4 overflow-scroll">
        {new Array(3).fill(0).map((_, index) => (
          <div
            key={index}
            className="flex flex-row justify-between border-b-2 border-black pb-2"
          >
            <h4>양말 이름</h4>
            <p>50 팩</p>
            <p>개당가격: 3.5</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between">
        <p className="font-semibold">총 갯수</p>
        <p>150</p>
      </div>
    </section>
  );
}

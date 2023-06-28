export default function OrderListDetail() {
  return (
    <section className="w-full h-2/3 justify-center rounded-md bg-white px-5 py-3 shadow-md hover:shadow-xl">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold">상품 주문 상세 정보</h2>
        <p className="mr-10 text-l">2023.06.28 19:56</p>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <p>납품 가게 정보</p>
        <p>납풀할 가게 이름</p>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <p>납품 가게 특이사항</p>
        <p>
          납품가게에 대한설명1 2 3 4 납품가게에 대한설명1 2 3 4 납품가게에
          대한설명1 2 3 4납품가게에 대한설명1 2 3 4납품가게에 대한설명1 2 3
          4납품가게에 대한설명1 2 3 4납품가게에 대한설명1 2 3 4납품가게에
          대한설명1 2 3 4납품가게에 대한설명1 2 3 4납품가게에 대한설명1 2 3
        </p>
      </div>
      <div className="mt-5 mr-10 flex flex-col items-end gap-3">
        <p>주문 금액</p>
        <p>3000,000</p>
      </div>
      <div className="mt-10 mr-10 flex flex-row gap-3 justify-end">
        <button>수정</button>
        <button>삭제</button>
      </div>
    </section>
  );
}

{
  /* <table className="table-fixed w-full">
<thead>
  <tr>
    <th className="w-1/2">상품명</th>
    <th className="w-1/4">수량</th>
    <th className="w-1/4">가격</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>상품명</td>
    <td>수량</td>
    <td>가격</td>
  </tr>
  <tr>
    <td>상품명</td>
    <td>수량</td>
    <td>가격</td>
  </tr>
</tbody>
</table> */
}

import { Products } from "@/service/products";

type Props = {
  product: Products;
};

export default function Description({ product }: Props) {
  const { title, category, price } = product;

  return (
    <section className="w-1/3">
      <div className="">
        <p className="text-lg text-gray-500">{category}</p>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="mt-3 flex flex-row gap-12">
        <p className="font-semibold text-slate-500">판매가</p>
        <p className="text-l font-bold">{`${price.toLocaleString()}원`}</p>
      </div>
      <div className="mt-3 flex flex-row gap-12">
        <p className="font-semibold text-slate-500">원산지</p>
        <p className="text-l font-bold">멕시코</p>
      </div>
      <div className="mt-24 flex gap-10">
        <button
          className="w-1/3 h-12 bg-blue-500 text-white font-bold 
                      text-lg rounded-md hover:bg-blue-600 transition-colors"
        >
          결제하기
        </button>
        <button
          className=" w-1/3 h-12 bg-gray-200 text-gray-500 font-bold
                        text-lg rounded-md hover:bg-gray-300 transition-colors"
        >
          장바구니
        </button>
      </div>
    </section>
  );
}

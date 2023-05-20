import { Products } from "@/service/products";

type Props = {
  product: Products;
};

export default function Description({ product }: Props) {
  const { title, category, price } = product;

  return (
    <section className="w-1/3">
      <div className="flex flex-col gap-2">
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
    </section>
  );
}

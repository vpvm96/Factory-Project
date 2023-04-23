import { Products } from "@/service/products";

type Props = {
  product: Products;
};

export default function Description({ product }: Props) {
  const { title, category, price } = product;

  return (
    <section className="w-1/3">
      <div className="flex flex-col gap-3">
        <p className="text-lg text-gray-500">{category}</p>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="self-end text-xl font-bold text-sky-500">{price}</p>
      </div>
    </section>
  );
}

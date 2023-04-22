import Image from "next/image";
import Link from "next/link";

import { Products } from "@/service/products";

type Props = {
  product: Products;
};

export default function ContentCard({ product }: Props) {
  const { id, image, title, category, date, price } = product;

  return (
    <Link href={`/products/${id}`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
        <Image
          className="w-full h-56 object-cover"
          src={`/images/${image}.jpg`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col p-4">
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">{category}</p>
            <time className="self-end">{date.toString()}</time>
          </div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-500">{price}</p>
        </div>
      </article>
    </Link>
  );
}

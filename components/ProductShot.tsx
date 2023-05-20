import { Products } from "@/service/products";

import Thumbnail from "./Thumbnail";

type Props = {
  product: Products;
};

export default function ProductShot({ product: { image, title } }: Props) {
  return (
    <section className="mt-10 border-t border-gray-400 px-40">
      <h2 className=" my-8 text-center text-2xl font-bold">
        Product Detail Image
      </h2>
      <div className="flex flex-col items-center">
        <Thumbnail image={image} title={title} />
      </div>
    </section>
  );
}

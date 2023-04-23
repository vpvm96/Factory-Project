import { Products } from "@/service/products";

import Description from "./Description";
import Thumbnail from "./Thumbnail";

type Props = {
  product: Products;
};

export default function ProductDetail({ product }: Props) {
  const { title, image } = product;

  return (
    <section className="mt-10 flex flex-row justify-evenly">
      <Thumbnail image={image} title={title} />
      <Description product={product} />
    </section>
  );
}

import { Metadata } from "next";

import { Products, getProductService } from "@/service/products";

import ProductDetail from "@/components/ProductDetail";
import ProductShot from "@/components/ProductShot";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const product: any = await getProductService(slug);

  return {
    title: product.title,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProductService(slug);

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <ProductDetail product={product} />
      {/* @ts-expect-error Server Component */}
      <ProductShot product={product} />
    </>
  );
}

import Banner from "@/components/Banner";
import ProductsSection from "@/components/ProductsSection";

export default function HomePage() {
  return (
    <>
      <Banner />
      {/* @ts-expect-error Server Component */}
      <ProductsSection />
    </>
  );
}

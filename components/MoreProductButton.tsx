"use client";

import { useRouter } from "next/navigation";

export default function MoreProductButton() {
  const router = useRouter();

  const handleNavigateProduct = () => {
    router.push("/products");
  };

  return (
    <div className="mt-7 text-center">
      <button
        className="items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-white"
        onClick={handleNavigateProduct}
      >
        More Product
      </button>
    </div>
  );
}

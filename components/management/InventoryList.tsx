"use client";

import { Products } from "@/service/products";
import { useModal, useForm } from "@/hooks";

import AddManageButton from "./AddManageButton";
import InventoryListModal from "./InventoryListModal";

interface Props {
  products: Products[];
}

export interface InventoryListFormValue {
  productName: string;
  quantity: number;
}

export default function InventoryList({ products }: Props) {
  const { isOpen, openModal, closeModal } = useModal();
  const { formData, handleChange, handleSubmit } =
    useForm<InventoryListFormValue>(
      {
        productName: "",
        quantity: 0,
      },
      closeModal
    );

  return (
    <section className="flex h-64 w-full max-w-md flex-col justify-center gap-4 rounded-md bg-white px-5 py-3 shadow-md hover:shadow-xl">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold">재고 리스트</h2>
        <AddManageButton buttonName="재고 관리" openModal={openModal} />
      </div>
      <div className="flex flex-col gap-4 overflow-scroll">
        {products.map(({ id, title, quantity }) => (
          <div
            key={id}
            className="flex flex-row w-full gap-4 border-b-2 border-black pb-2 items-center"
          >
            <h4
              className={`${title.length > 10 ? "w-16" : "w-auto"} truncate`}
              style={{ width: "20rem" }}
            >
              {title}
            </h4>
            <p
              className={`${
                quantity.toString().length > 15 ? "w-24" : "w-auto"
              } truncate`}
              style={{ width: "5rem" }}
            >
              {quantity}
            </p>
            <p className="w-16">Bulltos</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between">
        <p className="font-semibold">총 갯수</p>
        <p>
          {products.reduce((acc, { quantity }) => acc + quantity, 0)} Bulltos{" "}
        </p>
      </div>
      <InventoryListModal
        isOpen={isOpen}
        closeModal={closeModal}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </section>
  );
}

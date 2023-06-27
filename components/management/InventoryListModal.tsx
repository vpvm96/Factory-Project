import { InventoryListFormValue } from "./InventoryList";

import Modal from "../common/Modal";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  formData: InventoryListFormValue;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function InventoryListModal({
  isOpen,
  closeModal,
  formData,
  handleChange,
  handleSubmit,
}: Props) {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className="flex flex-col gap-4 p-10  w-[700px] h-[350px]">
        <h2 className="text-2xl font-bold text-center">
          재고 상품 리스트 추가하기
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="productName">상품 이름</label>
          <input
            id="productName"
            name="productName"
            type="text"
            autoFocus
            onChange={handleChange}
            value={formData.productName}
            className="border-slate-600 border-2 rounded-md p-2"
          />
          <label htmlFor="quantity">상품 갯수</label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            onChange={handleChange}
            value={formData.quantity}
            className="border-slate-600 border-2 rounded-md p-2"
          />
          <button
            type="submit"
            className="bg-slate-600 text-white rounded-md p-2 hover:bg-slate-700 transition-colors"
          >
            추가하기
          </button>
        </form>
      </div>
    </Modal>
  );
}

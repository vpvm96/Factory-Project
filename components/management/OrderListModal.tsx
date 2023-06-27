import { OrderListFormValue } from "./OrderList";

import Modal from "../common/Modal";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  formData: OrderListFormValue;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function OrderListModal({
  isOpen,
  closeModal,
  formData,
  handleChange,
  handleSubmit,
}: Props) {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className="flex flex-col gap-4 p-10  w-[700px] h-[600px]">
        <h2 className="text-2xl font-bold text-center">
          상품 주문 리스트 추가하기
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="storeName">납품 가게 이름</label>
          <input
            id="storeName"
            name="storeName"
            type="text"
            autoFocus
            onChange={handleChange}
            value={formData.storeName}
            className="border-slate-600 border-2 rounded-md p-2"
          />
          <label htmlFor="totalPrice">납품 총 금액</label>
          <input
            id="totalPrice"
            name="totalPrice"
            type="text"
            onChange={handleChange}
            value={formData.totalPrice}
            className="border-slate-600 border-2 rounded-md p-2"
          />
          <label htmlFor="description">납품 상품 설명</label>
          <textarea
            id="description"
            name="description"
            cols={30}
            rows={9}
            onChange={handleChange}
            value={formData.description}
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

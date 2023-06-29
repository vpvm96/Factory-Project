import { Products } from "@/service/products";

interface Props {
  products: Products[];
}

export default function InventoryListAdmin({ products }: Props) {
  return (
    <div className="w-full h-full justify-center rounded-md bg-white px-5 py-3 shadow-md hover:shadow-xl">
      <table className="min-w-full divide-y divide-gray-200 mt-5">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              상품 이름
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              상품 갯수
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              개수 수정
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              결정
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 overflow-scroll">
          {products.map(({ id, title, quantity }) => (
            <tr key={id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{title}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{quantity}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex">
                  <div>
                    <input
                      type="number"
                      className="w-10"
                      defaultValue={quantity}
                    />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-sm text-gray-500">수정</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

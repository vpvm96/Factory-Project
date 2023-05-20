import Link from "next/link";

import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <header className="flex border-b border-b-gray-400 p-4">
      <div className="w-1/5 px-4 text-2xl font-bold ">
        <Link href="/">Home Page</Link>
      </div>
      <nav className="flex w-4/5 items-center justify-around text-lg">
        <Link href="/management">재고관리</Link>
        <Link href="/products">상품소개</Link>
        <Link href="counselling">문의하기</Link>
        <Link href="/enquiry">견적문의</Link>
      </nav>
      <div className="w-1/3 px-2">
        <SearchInput />
      </div>
    </header>
  );
}

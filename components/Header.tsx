import Link from "next/link";

import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <header className="flex border-b-2 border-b-gray-500 p-4">
      <div className="w-1/5 px-4 text-2xl font-bold ">
        <Link href="/">Home Page</Link>
      </div>
      <nav className="flex w-4/5 items-center justify-around text-lg">
        <Link href="">회사소개</Link>
        <Link href="/products">상품소개</Link>
        <Link href="">커뮤니티</Link>
        <Link href="/enquiry">견적문의</Link>
      </nav>
      <div className="w-1/3 px-2">
        <SearchInput />
      </div>
    </header>
  );
}

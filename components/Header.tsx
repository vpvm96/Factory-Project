import Link from "next/link";

export default function Header() {
  return (
    <header className="flex p-4 border-b-gray-500 border-b-2">
      <div className="w-1/5 text-2xl font-bold">
        <Link href="/">Home Page</Link>
      </div>
      <nav className="flex justify-between w-3/5 text-lg items-center">
        <Link href="">회사소개</Link>
        <Link href="/products">상품소개</Link>
        <Link href="">커뮤니티</Link>
        <Link href="">견적문의</Link>
      </nav>
      <nav className="flex justify-evenly w-1/5 text-sm items-center text-stone-500">
        <Link href="">로그인</Link>
        <Link href="">회원가입</Link>
      </nav>
    </header>
  );
}

"use client";

import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
  return (
    <div className="relative mx-auto flex justify-center text-gray-600">
      <input
        className=" h-10 rounded-lg border-2 border-gray-300 bg-white px-5 pr-16 text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit" className="absolute right-9 top-0 mr-8 mt-3">
        <CiSearch />
      </button>
    </div>
  );
}

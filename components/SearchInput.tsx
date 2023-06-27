"use client";

import { useSearch } from "@/hooks";
import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
  const { searchValue, handleValueChange } = useSearch();

  return (
    <div className="relative w-full mx-auto flex justify-center text-gray-600">
      <input
        className="w-full pl-2 h-10 rounded-lg border-2 border-gray-300 bg-white text-sm focus:outline-none"
        name="search"
        placeholder="Search"
        value={searchValue}
        onChange={handleValueChange}
      />
      <button
        type="submit"
        className="absolute
        right-0 top-0 mt-3 mr-2
      "
      >
        <CiSearch />
      </button>
    </div>
  );
}

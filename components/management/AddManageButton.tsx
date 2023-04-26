"use client";

import React from "react";

type Props = {
  buttonName: string;
};

export default function AddManageButton({ buttonName }: Props) {
  return (
    <div className="flex flex-row justify-end">
      <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
        {buttonName}
      </button>
    </div>
  );
}

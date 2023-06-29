"use client";

import React from "react";

interface Props {
  buttonName: string;
  clickEvent?: () => void;
}

export default function AddManageButton({ buttonName, clickEvent }: Props) {
  return (
    <div className="flex flex-row justify-end">
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={clickEvent}
      >
        {buttonName}
      </button>
    </div>
  );
}

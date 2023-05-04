"use client";

import _ from "lodash";
import { ChangeEvent, useCallback, useState } from "react";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  // Debounce search
  const debouncedSearch = _.debounce((e) => {}, 200);
  const keyPress = useCallback(debouncedSearch, []);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    keyPress(e);
  };

  return { searchValue, handleValueChange };
};

export default useSearch;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../Redux/ProductSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.products.searchQuery);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <input
      className="px-2 py-1 sm:p-2   border-2 rounded-full w-36 sm:w-fit"
      type="text"
      placeholder="Search products..."
      value={searchQuery}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;

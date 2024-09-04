import React from "react";
import "./Search.css";
import { SearchRounded } from "@mui/icons-material";

function Search({ search, onSearchChange }) {
  return (
    <div className="search-flex">
      <SearchRounded />
      <input
      className="search-input"
        placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => {
          onSearchChange(e);
        }}
      />
    </div>
  );
}

export default Search;

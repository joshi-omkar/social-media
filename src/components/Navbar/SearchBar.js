import React from "react";
import "./Navbar.css";
import Search from "../../assets/search";

const SearchBar = () => {
  const handleChangeSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="searchbar-container">
      <span>
        <Search />
        <input
          className="searchbar-input"
          type="text"
          onChange={handleChangeSearch}
          placeholder="Search"
        />
      </span>
      <div className="searchbar-result"></div>
    </div>
  );
};

export default SearchBar;

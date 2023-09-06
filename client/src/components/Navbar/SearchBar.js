import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import Search from "../../assets/search";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../features/User/userAction";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setSearchData([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleChangeSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const search = (data, searchParam) => {
    if (searchParam === "") return [];
    return data.filter(
      (user) =>
        user.firstName.toLowerCase().includes(searchParam.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchParam.toLowerCase()) ||
        user.username.toLowerCase().includes(searchParam.toLowerCase())
    );
  };

  useEffect(() => {
    setSearchData(search(users, query));
  }, [query]);

  return (
    <div className="searchbar-container">
      <span>
        <Search />
        <input
          className="searchbar-input"
          type="text"
          value={query}
          onChange={handleChangeSearch}
          placeholder="Search"
          ref={searchInputRef}
        />
      </span>
      <div className="searchbar-result" style={{ display: "flex", height: "0px", flexDirection: "cloumn", gap: '4px'}}>
        <div
          style={
            searchData.length === 0
              ? { display: "none" }
              : { display: "block", zIndex: "10000000", width: "100%", height: 'fit-content', border: '1px solid #EEE' }
          }
        >
          {searchData.length > 0 ? (
            searchData.map((item) => (
              <Link to={`/user/${item.username}`} key={item.id}>
                <h3 style={{ backgroundColor: "#121212", padding: "8px"}}>
                  {item.username}
                </h3>
              </Link>
            ))
          ) : (
            <h2 style={{ backgroundColor: "#fff" }}>No items found.</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

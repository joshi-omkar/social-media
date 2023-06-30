import React from "react";
import "./Navbar.css";
import SearchBar from "./SearchBar";
import ProfileDropdown from "./ProfileDropdown";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">FOMO</div>
      <div style={{ width: "30%" }}>
        <SearchBar />
      </div>
      <ProfileDropdown />
    </div>
  );
};

export default NavBar;

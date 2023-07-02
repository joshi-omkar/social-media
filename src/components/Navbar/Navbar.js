import React from "react";
import "./Navbar.css";
import SearchBar from "./SearchBar";
import ProfileDropdown from "./ProfileDropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to='/' className="logo">FOMO</Link>
      <div style={{ width: "30%" }}>
        <SearchBar />
      </div>
      <div>
        <Link to={'/explore'}>Explore</Link>
      </div>
      <ProfileDropdown />
    </div>
  );
};

export default NavBar;

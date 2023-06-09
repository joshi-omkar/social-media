import React from "react";
import "./Navbar.css";
import SearchBar from "./SearchBar";
import ProfileDropdown from "./ProfileDropdown";
import { Link } from "react-router-dom";
import Fomo from "../../assets/Fomo";
import ExploreSVG from "../../assets/ExploreSVG";
import BookmarkNav from "../../assets/BookmarkNav";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to='/' className="logo" style={{display: "flex"}}><Fomo/></Link>
      <div style={{ width: "30%" }}>
        <SearchBar />
      </div>
      <div style={{display: 'flex',width: '200px', gap: '20px'}}>
        <Link to={'/explore'}><ExploreSVG/></Link>
        <Link to={'/bookmark'}><BookmarkNav/></Link>
      </div>
      <ProfileDropdown />
    </div>
  );
};

export default NavBar;

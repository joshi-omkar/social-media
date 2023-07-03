import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const ProfileDropdown = () => {
  const outSideClickRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const handleOnLogout = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
    navigate("/login");
  };
  const { userInfo } = useSelector((state) => state.auth);

  const handleShowDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        outSideClickRef.current &&
        !outSideClickRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container">
      <div ref={outSideClickRef} onClick={handleShowDropdown}>
        {userInfo?.firstName}
      </div>

      <div className="dropdown-items-container">
        {showDropdown && (
          <ul className="dropdown-items">
            <li>Profile</li>
            <li onClick={handleOnLogout}>Logout</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProfileDropdown;

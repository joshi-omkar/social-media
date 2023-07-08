import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import ProfileSVG from "../../assets/ProfileSVG";
import LogoutSVG from "../../assets/LogoutSVG";
import { getUserName } from "../../utils/Helper";

const ProfileDropdown = () => {
  const outSideClickRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const handleOnLogout = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
    navigate("/login");
  };
  const handleOnClickProfile = (e) => {
    e.preventDefault();
    navigate(`/user/${getUserName(userInfo.email)}`);
  };

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
      <div
        className="dropdown-container-profile"
        ref={outSideClickRef}
        onClick={handleShowDropdown}
      >
        <img src={userInfo?.profileAvatar} alt={userInfo?.firstName} />
        <label>{userInfo?.firstName}</label>
      </div>

      <div className="dropdown-items-container">
        {showDropdown && (
          <ul className="dropdown-items">
            <li onClick={handleOnClickProfile}>
              <ProfileSVG /> Profile
            </li>
            <li onClick={handleOnLogout}>
              <LogoutSVG />
              Logout
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProfileDropdown;

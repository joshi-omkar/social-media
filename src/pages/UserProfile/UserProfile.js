import React from "react";
import "./UserProfile.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";

const UserProfile = () => {
  const { userInfo: user } = useSelector((state) => state.auth);

  console.log(user);

  return (
    <div className="userProfile">
      <div className="left-side"></div>
      <div className="right-side">
        <UserProfileCard data={user}/>
      </div>
    </div>
  );
};

export default UserProfile;

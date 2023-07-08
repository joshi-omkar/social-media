import React from "react";
import "./UserProfileCard.css";
import { getUserName } from "../../utils/Helper";

const UserProfileCard = ({ data }) => {
  return (
    <div className="user-container">
      <div className="user-cover-photo"></div>
      <div className="user-profile-img">
        <img src={data?.profileAvatar} alt={data?.firstName} />
      </div>
      <div className="user-info">
        <div className="user-name-username">
          <p className="user-firstname-lastname">
            {data?.firstName} {data?.lastName}
          </p>
          <p className="user-username">@{data?.email}</p>
        </div>
        <div className="user-follow-unfollow">
          <span>
            <p>Followers</p>
            <p>{data?.followers?.length}</p>
          </span>
          <span>
            <p>Following</p>
            <p>{data?.followers.length}</p>
          </span>
        </div>
        <div className="user-bio-links">
          <p>{data?.bio}</p>
          <p>{data?.website}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;

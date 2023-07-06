import React from "react";
import "./UserCardOnHover.css";
import { getUserName } from "../../utils/Helper";

const UserCardOnHover = ({ data }) => {
  return (
    <div className="user-card-on-hover">
        <div className="user-card-on-hover-name-username">
          <img src={data.profileAvatar} alt={data.firstName} />
          <p className="user-card-on-hover-firstname-lastname">
            {data.firstName} {data.lastName}
          </p>
        </div>
        <div className="user-card-on-hover-follow-unfollow">
          <span>
            <p>Followers</p>
            <p>{data.followers.length}</p>
          </span>
          <span>
            <p>Following</p>
            <p>{data.followers.length}</p>
          </span>
        </div>
    </div>
  );
};

export default UserCardOnHover;

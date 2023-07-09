import React, { useEffect, useState } from "react";
import "./UserProfileCard.css";
import { getUserName } from "../../utils/Helper";
import { useDispatch, useSelector } from "react-redux";
import { userFollow, userUnfollow } from "../../features/auth/authAction";

const UserProfileCard = ({ data, isUser }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const [isFollowed, setIsFollowed] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isUser) {
      setIsFollowed(() =>
        userInfo.following.some((user) => user.username === data.username)
      );
    }
  }, [userInfo]);

  console.log(userInfo.following.some((user) => console.log(user)));

  const handleClickOnFollow = () => {
    dispatch(userFollow({ followUserId: data._id }));
  };

  const handleClickOnUnfollow = () => {
    dispatch(userUnfollow({ followUserId: data._id }));
  }

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
          <p className="user-username">@{data?.username}</p>
        </div>
        <div className="user-follow-unfollow">
          <span>
            <p>Followers</p>
            <p>{data?.followers?.length}</p>
          </span>
          <span>
            <p>Following</p>
            <p>{data?.following.length}</p>
          </span>
        </div>
        <div className="user-bio-links">
          <p>{data?.bio}</p>
          <p>{data?.website}</p>
        </div>
        {!isUser && (
          <div>
            {isFollowed ? (
              <button className="user-unfollow" onClick={handleClickOnUnfollow}>Unfollow</button>
            ) : (
              <button className="user-follow" onClick={handleClickOnFollow}>Follow</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;

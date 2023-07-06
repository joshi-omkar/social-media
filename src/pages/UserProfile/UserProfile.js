import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { useDispatch, useSelector } from "react-redux";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import { PostCard } from "../../components/PostCard/PostCard";
import { getUserPosts } from "../../features/User/userAction";
import UserFeedTab from "../../components/UserFeedTab/UserFeedTab";

const UserProfile = () => {
  const { userInfo: user, success } = useSelector((state) => state.auth);
  const { userPosts } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [active, setActive] = useState("new");

  useEffect(() => {
    const userData = {
      email: user.email,
    };
    dispatch(getUserPosts(userData));
  }, [user, success]);

  return (
    <div className="user-profile">
      <div className="user-profile-left-side">
        <div className="user-filter-tabs">
          <UserFeedTab active={active} setActive={setActive} />
        </div>
        <div className="user-posts">
          <PostCard dataToShow={userPosts} active={active} />
        </div>
      </div>
      <div className="user-profile-right-side">
        <UserProfileCard data={user} />
      </div>
    </div>
  );
};

export default UserProfile;

import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { useDispatch, useSelector } from "react-redux";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import { PostCard } from "../../components/PostCard/PostCard";
import {
  getAllUsers,
  getUser,
  getUserPosts,
} from "../../features/User/userAction";
import UserFeedTab from "../../components/UserFeedTab/UserFeedTab";
import { useParams } from "react-router-dom";
import { getUserName } from "../../utils/Helper";
import Loader from "../../assets/loader";
import { TostMessage } from "../../components/TostMessage/TostMessage";
import { USERURL } from "../../utils/Constants";
import axios from "axios";

const UserProfile = () => {
  // const { userInfo, success } = useSelector((state) => state.auth);
  const { loading, userPosts, users } = useSelector((state) => state.user);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [active, setActive] = useState("new");
  const [user, setUser] = useState(null);
  const [fakeLoading, setFakeLoading] = useState(false);
  const { username } = useParams();
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setFakeLoading(true);
        const response = await axios.get(`${USERURL.User}/${username}`);
        setUser(response.data.user);
        setIsUser(userInfo.username === response.data.user.username);
      } catch (err) {
        TostMessage(err.response.data, "error");
      } finally {
        setFakeLoading(false);
      }
    })();
  }, [username, userInfo]);

  useEffect(() => {
    dispatch(
      getUserPosts({
        username: user?.username,
      })
    );
  }, [user]);

  return (
    <>
      {/* {fakeLoading && ( */}
      <div className="user-profile">
        <div className="user-profile-left-side">
          <div className="user-filter-tabs">
            <UserFeedTab active={active} setActive={setActive} />
          </div>
          <div className="user-posts">
            {loading && (
              <Loader width={"177px"} height={"177px"} strokeWidth={8} />
            )}
            {!loading && (
              <PostCard dataToShow={userPosts} active={active} />
            )}
          </div>
        </div>
        <div className="user-profile-right-side">
          {fakeLoading && (
            <Loader width={"177px"} height={"177px"} strokeWidth={8} />
          )}
          {!fakeLoading && <UserProfileCard isUser={isUser} data={user} />}
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default UserProfile;

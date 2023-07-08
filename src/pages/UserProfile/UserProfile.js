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
  const dispatch = useDispatch();
  const [active, setActive] = useState("new");
  const [user, setUser] = useState(null);
  const [fakeLoading, setFakeLoading] = useState(false);
  const { email } = useParams();

  // console.log(email)

  useEffect(() => {
    (async () => {
      try {
        setFakeLoading(true);
        const response = await axios.get(`${USERURL.User}/${email}`);
        console.log(response);
        setUser(response.data.user);
        // setIsCurrUser(currUser._id === response.data.user._id);
      } catch (err) {
        TostMessage(err.response.data, "error");
      } finally {
        setFakeLoading(false);
      }
    })();
  }, [email]);

  console.log(user);

  // useEffect(()=>{
  //   const userData = {
  //     email : email
  //   }
  //   dispatch(getUser(userData))
  // },[email])

  // console.log(users)

  const userData = users.find((user) => getUserName(user.email) === email);

  useEffect(() => {
    dispatch(
      getUserPosts({
        email: user?.email,
      })
    );
  }, [user]);

  // if (fakeLoading)
  //   return <Loader width={"177px"} height={"177px"} strokeWidth={8} />;

  return (
    <>
      {/* {fakeLoading && ( */}
        <div className="user-profile">
          <div className="user-profile-left-side">
            <div className="user-filter-tabs">
              <UserFeedTab active={active} setActive={setActive} />
            </div>
            <div className="user-posts">
              {fakeLoading && (
                <Loader width={"177px"} height={"177px"} strokeWidth={8} />
              )}
              {!fakeLoading && (
                <PostCard dataToShow={userPosts} active={active} />
              )}
            </div>
          </div>
          <div className="user-profile-right-side">
            {fakeLoading && (
              <Loader width={"177px"} height={"177px"} strokeWidth={8} />
            )}
            {!fakeLoading && <UserProfileCard data={user} />}
          </div>
        </div>
      {/* )} */}
    </>
  );
};

export default UserProfile;

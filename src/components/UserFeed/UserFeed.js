import React, { useEffect, useState } from "react";
import "./UserFeed.css";
import { PostCard } from "../PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../features/Feed/FeedAction";
import Loader from "../../assets/loader";

const UserFeed = () => {
  const { loading, allPosts, error } = useSelector((state) => state.feed);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  useEffect(() => {
    setFilteredData(
      allPosts.filter(
        (post) =>
          userInfo?.followers?.some((item) => item?._id === post?.userId) ||
          userInfo?.following?.some((item) => item?._id === post?.userId) ||
          userInfo?._id === post?.userId
      )
    );
  }, [allPosts, userInfo]);

  return (
    <div className="userfeed">
      {loading ? <Loader /> : <PostCard dataToShow={filteredData} />}
    </div>
  );
};

export default UserFeed;

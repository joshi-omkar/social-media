import React, { useEffect, useState } from "react";
import CreatePost from "../../components/CreatePost/CreatePost";
import UserFeed from "../../components/UserFeed/UserFeed";
import "./Feed.css";
import UserFeedTab from "../../components/UserFeedTab/UserFeedTab";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../features/Feed/FeedAction";

const Feed = () => {
  const { allPosts, loading } = useSelector((state) => state.feed);
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
    <div className="feed">
      <CreatePost/>
      <UserFeedTab/>
      <UserFeed loading={loading} data={filteredData} />
    </div>
  );
};

export default Feed;

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
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [filteredData, setFilteredData] = useState([]);
  const [active, setActive] = useState("new");

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  useEffect(() => {
    setFilteredData(
      // allPosts?.filter(
      //   (post) =>
      //   user?.followers?.some((item) => item?._id === post?.userId) ||
      //   user?.following?.some((item) => item?._id === post?.userId) ||
      //   user?._id === post?.userId
      // )
      allPosts
    );
  }, [allPosts, userInfo]);

  return (
    <div className="feed">
      <CreatePost />
      <div style={{width: '60%'}}>
        <UserFeedTab active={active} setActive={setActive} />
      </div>
      <UserFeed active={active} loading={loading} data={filteredData} />
    </div>
  );
};

export default Feed;

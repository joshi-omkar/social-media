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
  const [active, setActive] = useState("new");

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  useEffect(() => {
    setFilteredData(
      allPosts?.filter(
        (post) =>
          userInfo?.followers?.some(
            (item) => item?.username === post?.username
          ) ||
          userInfo?.following?.some(
            (item) => item?.username === post?.username
          ) ||
          userInfo?.username === post?.username
      )
    );
  }, [allPosts, userInfo]);

  console.log(userInfo);

  return (
    <div className="feed">
      <CreatePost />
      <div className="feed-userfeedtab">
        <UserFeedTab active={active} setActive={setActive} />
      </div>
      <UserFeed active={active} loading={loading} data={filteredData} />
    </div>
  );
};

export default Feed;

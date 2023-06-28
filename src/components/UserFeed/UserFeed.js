import React, { useEffect } from "react";
import "./UserFeed.css";
import { PostCard } from "../PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../features/Feed/FeedAction";
import Loader from "../../assets/loader";

const UserFeed = () => {
  const { loading, allPosts, error } = useSelector(
    (state) => state.feed
  );
  const { reloadAllPosts } = useSelector(
    (state) => state.newPost
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [reloadAllPosts]);

  

  return (
    <div className="userfeed">
      {loading ? <Loader /> : <PostCard dataToShow={allPosts} />}
    </div>
  );
};

export default UserFeed;

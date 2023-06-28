import React from "react";
import CreatePost from "../../components/CreatePost/CreatePost";
import UserFeed from "../../components/UserFeed/UserFeed";
import "./Feed.css";
import UserFeedTab from "../../components/UserFeedTab/UserFeedTab";

const Feed = () => {
  return (
    <div className="feed">
      <CreatePost/>
      <UserFeedTab/>
      <UserFeed />
    </div>
  );
};

export default Feed;

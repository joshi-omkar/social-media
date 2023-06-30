import React, { useState } from "react";
import "./UserFeedTab.css";
import { useDispatch, useSelector } from "react-redux";
import { newSort, trendingSort } from "../../features/Feed/FeedSlice";

const UserFeedTab = () => {
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();
  const { allPosts } = useSelector((state) => state.feed);

  const handleOnClickNew = (e) => {
    e.preventDefault();
    dispatch(newSort());
  };

  const handleOnClickTrending = (e) => {
    e.preventDefault();
    dispatch(trendingSort());
  };

  return (
    <div className="userfeed-tab">
      <button onClick={handleOnClickNew} className="userfeed-tab-new">
        New
      </button>
      <button onClick={handleOnClickTrending} className="userfeed-tab-trending">
        Trending
      </button>
    </div>
  );
};

export default UserFeedTab;

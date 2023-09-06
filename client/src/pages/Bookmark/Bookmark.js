import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "../../components/PostCard/PostCard";
import { getBookmark } from "../../features/auth/authAction";
import { USERURL } from "../../utils/Constants";
import "./Bookmark.css";
import axios from "axios";
import Loader from "../../assets/loader";

const Bookmark = () => {
  const { loading, bookmarks } = useSelector((state) => state.auth);
  const { allPosts } = useSelector((state) => state.feed);
  const [bookmarkData, setBookmarkData] = useState([]);

  useEffect(() => {
    getBookmark();
  }, [bookmarks]);

  useEffect(() => {
    setBookmarkData(allPosts.filter((post) => bookmarks?.some((bookmark)=> post._id === bookmark)));
  }, [bookmarks, allPosts]);

  return (
    <div className="bookmark-page">
      <div className="bookmark-container">
        {loading ? (
          <Loader />
        ) : (
          <div className="bookmark">
            {bookmarkData.length === 0 && <h3>No Bookmarks</h3>}
            {bookmarkData?.map((bookmark, key) => {
              return <Card data={bookmark} key={key} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmark;

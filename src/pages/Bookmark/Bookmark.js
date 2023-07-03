import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "../../components/PostCard/PostCard";
import { getBookmark } from "../../features/auth/authAction";
import { USERURL } from "../../utils/Constants";
import "./Bookmark.css";
import axios from "axios";

const Bookmark = () => {
  // const { loading, bookmarks } = useSelector((state) => state.auth);
  const [bookmarks, setBookmarks] = useState([]);
  const [reload, setReload] = useState(false);

  const getBookmark = async () => {
    const token = localStorage.getItem("token");
    try {
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.get(`${USERURL.GetBookmarks}`, config);
      setBookmarks(response.data.bookmarks);
      console.log(response.data.bookmarks);
      setReload(!reload)
    } catch (error) {
      if (error.response && error.response.data.errors) {
        console.log(error.response.data.errors[0]);
      } else {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    getBookmark();
  }, []);

  return (
    <div className="bookmark-page">
      <div className="bookmark-container">
        <div className="bookmark">
          {bookmarks?.map((bookmark, key) => {
            return <Card data={bookmark} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Bookmark;

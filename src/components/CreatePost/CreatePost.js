import React, { useEffect, useRef, useState } from "react";
import "./CreatePost.css";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../features/Feed/FeedAction";

const CreatePost = () => {
  const { loading, allData, error, success } = useSelector(
    (state) => state.feed
  );
  const { userToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [newPostData, setNewPostData] = useState({ content: "" });
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const outSideClickRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.select();
    }
  }, [isOpen]);

  const handleOnClick = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (newPostData.content.length === 0) {
      setMessage("please write something!");
    } else {
      const data = {
        postData: newPostData,
      };
      dispatch(addPost(data, userToken));
      if (success) {
        setNewPostData({ content: "" });
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        outSideClickRef.current &&
        !outSideClickRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="create-post">
      <div style={{ width: "100%" }} ref={outSideClickRef}>
        <input
          onClick={handleOnClick}
          style={!isOpen ? { display: "block" } : { display: "none" }}
          className="create-post-input"
          placeholder="Create a post"
          type="text"
        />
        <textarea
          style={
            isOpen
              ? { display: "block", width: "50%", height: "60px" }
              : { display: "none" }
          }
          className="create-post-input-textarea"
          placeholder="Create a post"
          type="text"
          ref={textareaRef}
          value={newPostData.content}
          onChange={(e) => {
            setNewPostData({ content: e.target.value });
          }}
        />

        {/* <p
          style={
            newPostData.content.length === 0
              ? { display: "block", color: "#FF0000", marginTop: "4px" }
              : { display: "none" }
          }
        >
          {message}
        </p> */}
      </div>
      <button
        disabled={newPostData.content.length === 0}
        onClick={handlePost}
        className="create-post-button"
      >
        Post
      </button>
    </div>
  );
};

export default CreatePost;

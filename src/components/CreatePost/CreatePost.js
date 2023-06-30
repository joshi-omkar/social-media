import React, { useEffect, useRef, useState } from "react";
import "./CreatePost.css";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../features/newPostSlice/newPostAction";

const CreatePost = () => {
  const { loading, postData, error, success } = useSelector(
    (state) => state.newPost
  );
  const { userToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [newPostData, setNewPostData] = useState({ content: "" });
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
    const data = {
      postData: newPostData,
    };
    dispatch(addPost(data, userToken));
    console.log(loading, postData, error, success);
    if (postData) {
      setNewPostData({ content: "" });
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
              ? { display: "block", width: "50%", height: "80px" }
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
      </div>
      <button onClick={handlePost} className="create-post-button">
        Post
      </button>
    </div>
  );
};

export default CreatePost;

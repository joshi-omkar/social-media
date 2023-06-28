import React, { useState } from "react";
import "./CreatePost.css";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../features/newPostSlice/newPostAction";

const CreatePost = () => {
  const { loading, userInfo, postData, error, success } = useSelector(
    (state) => state.newPost
  );
  const dispatch = useDispatch();
  const [newPostData, setNewPostData] = useState({content : ""});

  const handleOnClick = (e) => {
    e.preventDefault();
  };


  const handlePost = (e) => {
    e.preventDefault();
    const data = {
      postData: newPostData,
    };
    dispatch(addPost(data));
    if(postData){
      setNewPostData({content: ''})
    }
  };

  console.log(loading, userInfo, postData, error, success)

  return (
    <div className="create-post">
      <input
        onClick={handleOnClick}
        onChange={(e) => {
          setNewPostData({content: e.target.value});
        }}
        value={newPostData.content}
        className="create-post-input"
        placeholder="Create a post"
      />
      <button onClick={handlePost} className="create-post-button">
        Post
      </button>
    </div>
  );
};

export default CreatePost;

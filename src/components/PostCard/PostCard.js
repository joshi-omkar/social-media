import "./PostCard.css";
import moment from "moment";
import { Link } from "react-router-dom";
import CommentSVG from "../../assets/Comment";
import Bookmark from "../../assets/Bookmark";
import UpArrow from "../../assets/UpArrow";
import DownArrow from "../../assets/DownArrow";
import ShareSVG from "../../assets/ShareSVG";
import SettingSVG from "../../assets/SettingSVG";
import { useEffect, useRef, useState } from "react";
import {
  deletePost,
  disLikePost,
  editPost,
  likePost,
} from "../../features/Feed/FeedAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../assets/loader";
import { addBookmark, removeBookmark } from "../../features/auth/authAction";

const SettingDropdown = ({
  showDropdown,
  setShowDropdown,
  outSideClickRef,
  setIsEdit,
  handleDeletePost,
}) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        outSideClickRef.current &&
        !outSideClickRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOnEdit = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  return (
    <div className="setting-dropdown-container">
      <div className="setting-dropdown-items-container">
        {showDropdown && (
          <ul className="setting-dropdown-items">
            <li onClick={handleClickOnEdit}>Edit</li>
            <li onClick={handleDeletePost}>Delete</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export const Card = ({ data }) => {
  const time = moment(data.createdAt).fromNow();
  const [fill, setFill] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  // const [isLiked, setIsLiked] = useState(false);
  // const [isDisliked, setIsDisliked] = useState(false);
  // const [isBookMarked, setIsBookMarked] = useState(false);
  const outSideClickRef = useRef(null);
  const textareaRef = useRef(null);
  const [editPostData, setEditPostData] = useState({ content: data.content });
  const { userToken, userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isLiked = data.likes.likedBy.some((item) => item._id === user?._id);
  const isDisliked = data.likes.dislikedBy.some(
    (item) => item._id === user?._id
  );
  const isBookMarked = userInfo?.bookmarks.some(
    (item) => item._id === data._id
  );

  useEffect(() => {
    if (isEdit && textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.select();
    }
  }, [isEdit]);

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsEdit(false);
    const postData = {
      postData: editPostData,
      postId: data._id,
    };
    dispatch(editPost(postData, userToken));
  };

  const handleUpdateCancle = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };

  const handleDeletePost = (e) => {
    e.preventDefault();
    const postData = {
      postId: data._id,
    };
    dispatch(deletePost(postData, userToken));
  };

  return (
    <div className="post-card">
      {isEdit ? (
        <div className="edit-post-input">
          <textarea
            // className="create-post-input-textarea"
            placeholder="Create a post"
            type="text"
            ref={textareaRef}
            value={editPostData.content}
            onChange={(e) => {
              setEditPostData({ content: e.target.value });
            }}
            style={{ width: "90%" }}
          />
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button onClick={handleUpdate} className="edit-post-button">
              Edit
            </button>
            <button
              onClick={handleUpdateCancle}
              className="cancle-edit-post-button"
            >
              Cancle
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="right-side">
            <div style={{ cursor: "pointer" }}>
              <UpArrow
                fill={isLiked ? "#ff2f56" : "#fff"}
                onClick={(e) => {
                  e.preventDefault();

                  const postData = {
                    postId: data._id,
                  };
                  dispatch(likePost(postData));
                }}
              />
            </div>
            <label style={{ marginLeft: "4px", marginBottom: "2px" }}>
              {data.likes.likeCount}
            </label>
            <div style={{ cursor: "pointer" }}>
              <DownArrow
                fill={isDisliked ? "#492fff" : "#fff"}
                onClick={(e) => {
                  e.preventDefault();

                  const postData = {
                    postId: data._id,
                  };
                  dispatch(disLikePost(postData));
                }}
              />
            </div>
          </div>
          <div className="left-side">
            <div className="card-user-details">
              {/* <img src={data.picUrl} alt="profile" /> */}
              <span>
                <p>Posted By </p>
                <p> @{data.email}</p>
              </span>
              •<p>{time}</p>
            </div>
            <div className="post-details">
              <h3>{data.content}</h3>
              {/* <span>
            {data.tags.map((tag, key) => {
              return <div key={key}>{tag}</div>;
            })}
          </span> */}
              {/* <p>{data.postDescription}</p> */}
            </div>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#e5e5e5",
                margin: "5px 0",
              }}
            ></div>
            <div className="card-left-lowerpart">
              <Link to={`/comments/${data.postId}`}>
                <CommentSVG />
              </Link>
              <div style={{ cursor: "pointer" }}>
                <ShareSVG />
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  const postData = {
                    postId: data._id,
                  };
                  // setIsBookMarked(!isBookMarked)
                  isBookMarked
                    ? dispatch(removeBookmark(postData))
                    : dispatch(addBookmark(postData));
                  setFill(!fill);
                }}
              >
                <Bookmark fill={!isBookMarked ? "none" : "#e5e5e5"} />
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setShowDropdown(true)}
                ref={outSideClickRef}
              >
                <SettingSVG />
              </div>
            </div>
            {showDropdown && (
              <SettingDropdown
                showDropdown={showDropdown}
                setShowDropdown={setShowDropdown}
                outSideClickRef={outSideClickRef}
                setIsEdit={setIsEdit}
                handleDeletePost={handleDeletePost}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export const PostCard = ({ dataToShow, active }) => {
  return (
    <div className="post-card-container">
      {active === "new"
        ? [...dataToShow]
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((data, key) => {
              return <Card data={data} key={key} />;
            })
        : [...dataToShow]
            .sort(
              (a, b) =>
                b?.likes?.likeCount +
                b?.comments?.length -
                (a?.likes?.likeCount + a?.comments?.length)
            )
            .map((data, key) => {
              return <Card data={data} key={key} />;
            })}
    </div>
  );
};

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
import { editPost } from "../../features/newPostSlice/newPostAction";
import { useDispatch, useSelector } from "react-redux";

const SettingDropdown = ({
  showDropdown,
  setShowDropdown,
  outSideClickRef,
  setIsEdit,
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
            <li>Delete</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export const Card = ({ data }) => {
  const time = moment(data.createdAt).fromNow();
  const [count, setCount] = useState(data.likes.likeCount);
  const [fill, setFill] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const outSideClickRef = useRef(null);
  const textareaRef = useRef(null);
  const [editPostData, setEditPostData] = useState({ content: data.content });
  const { userToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
          <div style={{width: '50%', display: 'flex', justifyContent: 'space-between'}}>
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
                onClick={() => {
                  setCount(count + 1);
                }}
              />
            </div>
            <label style={{ marginLeft: "4px", marginBottom: "2px" }}>
              {data.likes.likeCount}
            </label>
            <div style={{ cursor: "pointer" }}>
              <DownArrow
                onClick={() => {
                  setCount(count - 1);
                }}
              />
            </div>
          </div>
          <div className="left-side">
            <div className="card-user-details">
              {/* <img src={data.picUrl} alt="profile" /> */}
              <span>
                <p>Posted By </p>
                <p> @{data.username}</p>
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
              <div style={{ cursor: "pointer" }} onClick={() => setFill(!fill)}>
                <Bookmark fill={!fill ? "none" : "#e5e5e5"} />
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
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export const PostCard = ({ dataToShow }) => {
  return (
    <div className="post-card-container">
      {dataToShow?.map((data, key) => {
        return <Card data={data} key={key} />;
      })}
    </div>
  );
};

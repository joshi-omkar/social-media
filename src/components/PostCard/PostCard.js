import "./PostCard.css";
import moment from "moment";
import { Link } from "react-router-dom";
import CommentSVG from "../../assets/Comment";
import Bookmark from "../../assets/Bookmark";
import UpArrow from "../../assets/UpArrow";
import DownArrow from "../../assets/DownArrow";
import ShareSVG from "../../assets/ShareSVG";
import { useState } from "react";

export const Card = ({ data }) => {
  const time = moment(data.createdAt).fromNow();
  const [count, setCount] = useState(data.likes.likeCount);
  const [fill, setFill] = useState(false);
  return (
    <div className="post-card">
      <div className="right-side">
        <div style={{ cursor: "pointer" }}>
          <UpArrow
            onClick={() => {
              setCount(count + 1);
            }}
          />
        </div>
        <label style={{marginLeft: '4px', marginBottom:'2px'}}>{count}</label>
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
          <span><p>Posted By </p><p> @{data.username}</p></span>•<p>{time}</p>
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
        </div>
      </div>
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

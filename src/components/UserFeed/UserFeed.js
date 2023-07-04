import React, { useEffect, useState } from "react";
import "./UserFeed.css";
import { PostCard } from "../PostCard/PostCard";
import Loader from "../../assets/loader";
import { useLocation } from "react-router-dom";

const UserFeed = ({ data, loading, active }) => {
  const [path, setPath] = useState();
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/explore") setPath(true);
    else setPath(false);
  }, [location.pathname]);

  

  return (
    <div className="userfeed">
      {path ? (
        loading ? (
          <div>
            <PostCard dataToShow={data} />
            <Loader width={"177px"} height={"177px"} strokeWidth={8}/>
          </div>
        ) : (
          <PostCard dataToShow={data} />
        )
      ) : loading ? (
        <Loader width={"177px"} height={"177px"} strokeWidth={8}/>
      ) : (
        <PostCard active={active} dataToShow={data} />
      )}
    </div>
  );
};

export default UserFeed;

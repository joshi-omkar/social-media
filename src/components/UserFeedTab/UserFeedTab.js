import React from "react";
import "./UserFeedTab.css";

const UserFeedTab = ({ setActive}) => {

  const handleOnClickNew = (e) => {
    e.preventDefault();
    setActive('new')
  };

  const handleOnClickTrending = (e) => {
    e.preventDefault();
    setActive('trending')
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

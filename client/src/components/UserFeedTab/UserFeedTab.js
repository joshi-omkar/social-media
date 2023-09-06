import React from "react";
import "./UserFeedTab.css";

const UserFeedTab = ({ setActive, active }) => {
  const handleOnClickNew = (e) => {
    e.preventDefault();
    setActive("new");
  };

  const handleOnClickTrending = (e) => {
    e.preventDefault();
    setActive("trending");
  };

  return (
    <div className="userfeed-tab">
      <button
        onClick={handleOnClickNew}
        className={`userfeed-tab-new ${
          active === "new" ? "active-tab" : "no-active-tab"
        }`}
      >
        New
      </button>
      <button
        onClick={handleOnClickTrending}
        className={`userfeed-tab-trending ${
          active === "trending" ? "active-tab" : "no-active-tab"
        }`}
      >
        Trending
      </button>
    </div>
  );
};

export default UserFeedTab;

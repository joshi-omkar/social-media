import React, { useEffect, useState } from "react";
import "./UserProfileCard.css";
import { getUrlName, getUserName, verifyUrl } from "../../utils/Helper";
import { useDispatch, useSelector } from "react-redux";
import {
  userEdit,
  userFollow,
  userUnfollow,
} from "../../features/auth/authAction";
import EditSVG from "../../assets/EditSVG";
import TickSVG from "../../assets/TickSVG";
import { Link } from "react-router-dom";
import UrlSVG from "../../assets/UrlSVG";

const UserEditContainer = ({ data, setIsEdit }) => {
  const [avatarUrl, setAvatarUrl] = useState(data.profileAvatar);
  const [bio, setBio] = useState(data.bio);
  const [website, setWebsite] = useState(data.website);
  const [showError, setShowError] = useState();

  const userAvatars = [
    "https://res.cloudinary.com/diudzga1m/image/upload/v1688571526/9_ydm5xq.jpg",
    "https://res.cloudinary.com/diudzga1m/image/upload/v1688571526/8_hentfh.jpg",
    "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/7_psig48.jpg",
    "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/6_yhlawt.jpg",
    "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/5_qh2nlv.jpg",
    "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/4_fxsd5d.jpg",
    "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/3_gepnpf.jpg",
    "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/2_pbse3s.jpg",
    "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/1_xy03cy.jpg",
  ];

  const handleOnClickAvatar = (avatar) => {
    setAvatarUrl(avatar);
  };

  const dispatch = useDispatch();

  return (
    <div className="user-edit-container">
      <div className="user-edit-img-container">
        {userAvatars.map((avatar, key) => {
          return (
            <div key={key} style={{ position: "relative" }}>
              <div className={avatarUrl === avatar ? `showmask` : `noshowmask`}>
                <TickSVG />
              </div>
              <img
                onClick={() => handleOnClickAvatar(avatar)}
                key={key}
                src={avatar}
                alt="profileAvatar"
              />
            </div>
          );
        })}
      </div>
      <div className="user-edit-info-container">
        <span>
          <p>Bio</p>
          <input
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            type="text"
          />
        </span>
        <span>
          <p>Url</p>
          <input
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            type="text"
          />
          <p style={{ color: "#FF0000", marginTop: "4px" }}>{showError}</p>
        </span>
      </div>
      <div className="user-edit-button-container">
        <button
          className="user-unfollow"
          onClick={() => {
            if (!verifyUrl(website)) {
              setShowError("This must be url!");
            } else {
              const userInfo = {
                bio: bio,
                website: website,
                profileAvatar: avatarUrl,
              };
              dispatch(userEdit(userInfo));
              setIsEdit(false);
            }
          }}
        >
          Update
        </button>
        <button
          className="user-unfollow"
          onClick={() => {
            setIsEdit(false);
          }}
        >
          Cancle
        </button>
      </div>
    </div>
  );
};

const UserProfileCard = ({ data, isUser }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const [isFollowed, setIsFollowed] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isUser) {
      setIsFollowed(() =>
        userInfo.following.some((user) => user.username === data.username)
      );
    }
  }, [userInfo]);

  const handleClickOnFollow = () => {
    dispatch(userFollow({ followUserId: data._id }));
  };

  const handleClickOnUnfollow = () => {
    dispatch(userUnfollow({ followUserId: data._id }));
  };

  const handleOnClickEdit = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  if (isEdit) {
    return <UserEditContainer data={data} setIsEdit={setIsEdit} />;
  }

  return (
    <div className="user-container">
      <div onClick={handleOnClickEdit} className="user-edit">
        {isUser && <EditSVG />}
      </div>
      <div className="user-cover-photo"></div>
      <div className="user-profile-img">
        <img src={data?.profileAvatar} alt={data?.firstName} />
      </div>
      <div className="user-info">
        <div className="user-name-username">
          <p className="user-firstname-lastname">
            {data?.firstName} {data?.lastName}
          </p>
          <p className="user-username">@{data?.username}</p>
        </div>
        <div className="user-follow-unfollow">
          <span>
            <p>Followers</p>
            <p>{data?.followers?.length}</p>
          </span>
          <span>
            <p>Following</p>
            <p>{data?.following.length}</p>
          </span>
        </div>
        <div className="user-bio-links">
          <span style={{display: 'flex', gap: '4px'}}>
            <p style={{fontWeight: 700, }}>{data?.bio}</p>
          </span>
          <Link style={{color: '#1A8CD8'}} to={data?.website}>
            <p style={{display: 'flex', gap: '2px'}}><UrlSVG/>{getUrlName(data?.website)}</p>
          </Link>
        </div>
        {!isUser && (
          <div>
            {isFollowed ? (
              <button className="user-unfollow" onClick={handleClickOnUnfollow}>
                Unfollow
              </button>
            ) : (
              <button className="user-follow" onClick={handleClickOnFollow}>
                Follow
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;

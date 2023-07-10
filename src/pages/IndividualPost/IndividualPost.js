import React, { useEffect, useState } from "react";
import "./IndividualPost.css";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/PostCard/PostCard";
import { getIndividualPost } from "../../features/Feed/FeedAction";
import Loader from "../../assets/loader";
import { TostMessage } from "../../components/TostMessage/TostMessage";
import axios from "axios";
import { POSTURL } from "../../utils/Constants";

const IndividualPost = () => {
  const { postId } = useParams();
  const { allPosts } = useSelector((state) => state.feed);
  const [postData, setPostData] = useState([]);
  const [fakeLoading, setFakeLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handlePageRefresh = (event) => {
      if (event.persisted) {
        window.location.href = "/";
      }
    };

    window.addEventListener("beforeunload", handlePageRefresh);

    return () => {
      window.removeEventListener("beforeunload", handlePageRefresh);
    };
  }, [navigate]);

  useEffect(() => {
    setFakeLoading(true);
    setPostData(allPosts.find((post) => post._id === postId));
    setFakeLoading(false);
  }, [postId, allPosts]);

  return (
    <div>
      {fakeLoading && (
        <Loader width={"177px"} height={"177px"} strokeWidth={8} />
      )}
      {!fakeLoading && <Card data={postData} />}
    </div>
  );
};

export default IndividualPost;

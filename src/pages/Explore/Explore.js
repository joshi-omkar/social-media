import React, { useEffect, useState } from "react";
import UserFeed from "../../components/UserFeed/UserFeed";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../features/Feed/FeedAction";
import Loader from "../../assets/loader";

const Explore = () => {
  const { allPosts } = useSelector((state) => state.feed);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  useEffect(() => {
    setFilteredData(
      allPosts.filter(
        (post) =>
          userInfo?.followers?.some((item) => item?._id === post?.userId) ||
          userInfo?.following?.some((item) => item?._id === post?.userId) ||
          userInfo?._id === post?.userId
      )
    );
  }, [allPosts, userInfo]);

  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const infScrollHandler = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setTimeout(() => {
          setPageNumber((pageNumber) => pageNumber + 1);
          setLoading(false);
        }, 750);
      }
    };
    allPosts.slice(0, pageNumber * 3).length !== allPosts.length &&
      window.addEventListener("scroll", infScrollHandler);
    return () => {
      allPosts.slice(0, pageNumber * 3).length !== allPosts.length &&
        window.removeEventListener("scroll", infScrollHandler);
    };
  }, [allPosts, pageNumber]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <UserFeed loading={loading} data={allPosts.slice(0, pageNumber * 5)} />
    </div>
  );
};

export default Explore;

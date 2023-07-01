import { createAsyncThunk } from "@reduxjs/toolkit";
import { POSTURL } from "../../utils/Constants";
import axios from "axios";

export const getAllPost = async () => await axios.get(POSTURL.GetAllPosts);

export const getAllPosts = createAsyncThunk(
  "api/posts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllPost();
      return response.data.posts;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const createPost = async ({ postData, token }) => {
  const config = {
    headers: {
      authorization: token,
    },
  };
  await axios.post(POSTURL.Post, { postData }, config);
};

export const addPost = createAsyncThunk(
  "api/addPost",
  async ({ postData }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.post(POSTURL.Post, { postData }, config);
      return response.data.posts;
    } catch (error) {
      if (error.response && error.response.data.errors) {
        return rejectWithValue(error.response.data.errors[0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const editPost = createAsyncThunk(
  "api/editPost",
  async (postData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.post(
        `${POSTURL.Edit}/${postData.postId}`,
        postData,
        config
      );
      return response.data.posts;
    } catch (error) {
      if (error.response && error.response.data.errors) {
        return rejectWithValue(error.response.data.errors[0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const deletePost = createAsyncThunk(
  "api/deletePost",
  async (postData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.delete(
        `${POSTURL.Delete}/${postData.postId}`,
        config
      );
      return response.data.posts;
    } catch (error) {
      if (error.response && error.response.data.errors) {
        return rejectWithValue(error.response.data.errors[0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const likePost = createAsyncThunk(
  "api/likePost",
  async (postData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.post(
        `${POSTURL.Like}/${postData.postId}`,
        {},
        config
      );
      return response.data.posts;
    } catch (error) {
      if (error.response && error.response.data.errors) {
        return rejectWithValue(error.response.data.errors[0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const disLikePost = createAsyncThunk(
  "api/disLikePost",
  async (postData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.post(
        `${POSTURL.Dislike}/${postData.postId}`,
        {},
        config
      );
      return response.data.posts;
    } catch (error) {
      if (error.response && error.response.data.errors) {
        return rejectWithValue(error.response.data.errors[0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
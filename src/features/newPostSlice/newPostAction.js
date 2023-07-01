import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { POSTURL } from "../../utils/Constants";

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
    console.log(postData)
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
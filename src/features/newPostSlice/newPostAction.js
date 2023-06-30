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
        POSTURL.Edit + `/${postData.id}`,
        postData,
        config
      );
      console.log(postData);
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

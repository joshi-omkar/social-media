import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { POSTURL } from "../../utils/Constants";

export const createPost = async ({postData}) => {
  const token = localStorage.getItem('token') ?? null
  const config = {
    headers: {
      authorization: token,
    },
  };
  await axios.post(POSTURL.Post, { postData }, config)
};

export const addPost = createAsyncThunk(
  "api/addPost",
  async ({ postData }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token") ?? null;
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.post(POSTURL.Post, { postData }, config);
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

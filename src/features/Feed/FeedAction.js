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

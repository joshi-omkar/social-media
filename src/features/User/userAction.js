import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USERURL } from "../../utils/Constants";

export const getUserPosts = createAsyncThunk(
    "auth/getUserPosts",
    async (userData, { rejectWithValue }) => {
      console.log(userData);
      try {
        const response = await axios.get(
          `${USERURL.UserPost}/${userData.email}`
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
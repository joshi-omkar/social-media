import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USERURL } from "../../utils/Constants";

export const getUserPosts = createAsyncThunk(
  "user/getUserPosts",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${USERURL.UserPost}/${userData.username}`
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

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${USERURL.AllUsers}`);
      return response.data.users;
    } catch (error) {
      if (error.response && error.response.data.errors) {
        return rejectWithValue(error.response.data.errors[0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${USERURL.User}/${userData.username}`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.errors) {
        return rejectWithValue(error.response.data.errors[0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

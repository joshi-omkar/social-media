import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AUTHURL, USERURL } from "../../utils/Constants";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ firstName, lastName, email, password, username, profileAvatar }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        AUTHURL.Signup,
        { firstName, lastName, email, password, username, profileAvatar },
        config
      );
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

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        AUTHURL.Login,
        { email, password },
        config
      );
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

export const getBookmark = createAsyncThunk(
  "auth/getBookmark",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    try {
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.get(`${USERURL.GetBookmarks}`, config);
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

export const addBookmark = createAsyncThunk(
  "auth/addBookmark",
  async (postData, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    try {
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.post(
        `${USERURL.AddBookmark}/${postData.postId}/`,
        {},
        config
      );
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

export const removeBookmark = createAsyncThunk(
  "auth/removeBookmark",
  async (postData, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    try {
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.post(
        `${USERURL.RemoveBookmark}/${postData.postId}/`,
        {},
        config
      );
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

export const getUserPosts = createAsyncThunk(
  "auth/getUserPosts",
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

export const userFollow = createAsyncThunk(
  "user/userFollow",
  async (userInfo , { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.post(`${USERURL.UserFollow}/${userInfo.followUserId}/`,{}, config);
      return response.data.user;
    } catch (error) {
      if (error.response && error.response.data.errors) {
        return rejectWithValue(error.response.data.errors[0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userUnfollow = createAsyncThunk(
  "user/userUnfollow",
  async ( userInfo , { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.post(`${USERURL.UserUnfollow}/${userInfo.followUserId}`,{}, config);
      return response.data.user;
    } catch (error) {
      if (error.response && error.response.data.errors) {
        return rejectWithValue(error.response.data.errors[0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userEdit = createAsyncThunk(
  "user/useerEdit",
  async ( userData , { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.post(`${USERURL.UserEdit}/`,{userData}, config);
      return response.data.user;
    } catch (error) {
      if (error.response && error.response.data.errors) {
        return rejectWithValue(error.response.data.errors[0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
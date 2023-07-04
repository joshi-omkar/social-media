import { createSlice } from "@reduxjs/toolkit";
import {
  addBookmark,
  getBookmark,
  loginUser,
  registerUser,
  removeBookmark,
} from "./authAction";
import { TostMessage } from "../../components/TostMessage/TostMessage";

const initialState = {
  loading: false,
  userInfo: JSON.parse(localStorage.getItem("user")) ?? null,
  userToken: localStorage.getItem("token"),
  error: null,
  success: false,
  bookmarks: [],
  // bookmarks: JSON.parse(localStorage.getItem("user"))?.bookmarks,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.userInfo = null;
      state.userToken = null;
    },
  },
  extraReducers: (builder) => {
    // Registration User
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userInfo = payload.foundUser;
      state.userToken = payload.encodedToken;
      localStorage.setItem("user", JSON.stringify(payload.foundUser));
      TostMessage("Succesfully Created Account!", "success");
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      TostMessage(payload, "error");
    });
    //Login User
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userInfo = payload.foundUser;
      state.userToken = payload.encodedToken;
      localStorage.setItem("user", JSON.stringify(payload.foundUser));
      state.error = null;
      TostMessage("Successfully LogedIn!", "success");
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      TostMessage(payload, "error");
    });
    //get bookmark
    builder.addCase(getBookmark.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBookmark.fulfilled, (state, { payload }) => {
      state.loading = false;
      console.log(payload);
      state.bookmarks = payload;
    });
    builder.addCase(getBookmark.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload
      console.log(payload)
    });
    // add bookmark
    builder.addCase(addBookmark.pending, (state) => {});
    builder.addCase(addBookmark.fulfilled, (state, { payload }) => {
      const user = { ...state.userInfo, bookmarks: payload.bookmarks };
      state.userInfo = user;
      state.bookmarks = payload.bookmarks;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(state.userToken));
      state.loading = false;
      TostMessage("Added to Bookmark!", "success");
    });
    builder.addCase(addBookmark.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      // TostMessage(payload, "error");
    });
    //remove bookmark
    builder.addCase(removeBookmark.pending, (state) => {});
    builder.addCase(removeBookmark.fulfilled, (state, { payload }) => {
      console.log(payload);
      const user = { ...state.userInfo, bookmarks: payload.bookmarks };
      console.log(user);
      state.userInfo = user;
      state.bookmarks = payload.bookmarks;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(state.userToken));
      state.loading = false;
      TostMessage("Removed from Bookmark!", "success");
    });
    builder.addCase(removeBookmark.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      TostMessage(payload, "error");
    });
  },
});
export const { handleLogout } = authSlice.actions;
export default authSlice.reducer;

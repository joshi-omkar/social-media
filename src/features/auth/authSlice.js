import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authAction";

const initialState = {
  loading: false,
  userInfo: JSON.parse(localStorage.getItem("user")) ?? null,
  userToken: localStorage.getItem("token") ?? null,
  error: null,
  success: false,
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
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userInfo = payload;
      state.userToken = payload.encodedToken;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    //Login User
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userInfo = payload;
      state.userToken = payload.encodedToken;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const { handleLogout } = authSlice.actions;
export default authSlice.reducer;

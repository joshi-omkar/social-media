import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authAction";
import { TostMessage } from "../../components/TostMessage/TostMessage";

const initialState = {
  loading: false,
  userInfo: JSON.parse(localStorage.getItem("user")),
  userToken: localStorage.getItem("token"),
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
      TostMessage("Succesfully Created Account!", "success");
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      TostMessage(payload, "error");
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
      state.error = null;
      TostMessage("Successfully LogedIn!", "success");
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
      TostMessage(payload, "error");
    },
  },
});
export const { handleLogout } = authSlice.actions;
export default authSlice.reducer;

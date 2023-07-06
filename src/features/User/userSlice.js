import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getUserPosts } from "./userAction";

const initialState = {
  loading: false,
  error: null,
  success: false,
  users : [],
  userPosts: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get User Posts
    builder.addCase(getUserPosts.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(getUserPosts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userPosts = payload;
      state.success = true;
    });
    builder.addCase(getUserPosts.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    });
    //All Users 
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.users = payload;
      state.success = true;
    });
    builder.addCase(getAllUsers.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    });
  },
});
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getUser, getUserPosts } from "./userAction";

const initialState = {
  loading: false,
  error: null,
  success: false,
  users : [],
  userPosts: [],
  user: [],
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
    //Get All Users 
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.users = payload;
      console.log(1, payload)
      state.success = true;
    });
    builder.addCase(getAllUsers.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
      console.log(2, payload)
    });
    //Get User  
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.success = true;
    });
    builder.addCase(getUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    });
  },
});
export default userSlice.reducer;

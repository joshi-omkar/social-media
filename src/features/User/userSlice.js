import { createSlice } from "@reduxjs/toolkit";
import { getUserPosts } from "./userAction";

const initialState = {
  loading: false,
  error: null,
  success: false,
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
  },
});
export default userSlice.reducer;

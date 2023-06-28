import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "./FeedAction";

const initialState = {
  loading: false,
  allPosts: [],
  error: null,
  success: false,
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(getAllPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllPosts.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.allPosts = payload;
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {
      state.loading = false;
    });
  }
});

export const feedReducer = feedSlice.reducer;
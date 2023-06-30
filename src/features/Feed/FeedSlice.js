import { createSlice, current } from "@reduxjs/toolkit";
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
  reducers: {
    newSort: (state) => {
      const { allPosts } = state;
      const sortedPosts = [...allPosts].sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateA - dateB;
      });
      console.log(state.allPosts)
      return { ...state, allPosts: sortedPosts };
    },
    trendingSort: (state) => {
      const { allPosts } = state;
      const sortedPosts = [...allPosts].sort(
        (a, b) => a.likes.likeCount - b.likes.likeCount
      );
      console.log(state.allPosts)
      return { ...state, allPosts: sortedPosts };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllPosts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.allPosts = payload;
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {
      state.loading = false;
    });
  },
});
export const { newSort, trendingSort } = feedSlice.actions;
export const feedReducer = feedSlice.reducer;

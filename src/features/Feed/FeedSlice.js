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
      const sortedPosts = [...state.allPosts].sort((a, b) => {
        const dateA = new Date(a?.createdAt);
        const dateB = new Date(b?.createdAt);
        return dateB - dateA;
      });
      console.log(sortedPosts);
      console.log(current(state));
      return { ...state, allPosts: sortedPosts };
    },
    trendingSort: (state) => {
      const sortedPosts = [...state.allPosts].sort(
        (a, b) => b?.likes?.likeCount - a?.likes?.likeCount
      );
      console.log(sortedPosts);
      console.log(current(state));
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

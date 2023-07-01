import { createSlice, current } from "@reduxjs/toolkit";
import { addPost, deletePost, editPost, getAllPosts, likePost } from "./FeedAction";
import { TostMessage } from "../../components/TostMessage/TostMessage";

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
      console.log(payload)
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {
      state.loading = false;
    });
    //add post
    builder.addCase(addPost.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(addPost.fulfilled, (state, { payload }) => {
      state.allPosts = payload;
      state.loading = false;
      state.success = true;
      state.error = null;
      TostMessage("Post created", "success");
    });
    builder.addCase(addPost.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
      TostMessage(payload, "error");
    });
    //edit post
    builder.addCase(editPost.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(editPost.fulfilled, (state, { payload }) => {
      state.allPosts = payload;
      state.loading = false;
      state.success = true;
      state.error = null;
      TostMessage("Post edited!", "success");
    });
    builder.addCase(editPost.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
      TostMessage(payload, "error");
    });
    //delete post
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(deletePost.fulfilled, (state, { payload }) => {
      state.allPosts = payload;
      state.loading = false;
      state.success = true;
      state.error = null;
      TostMessage("Post deleted!", "success");
    });
    builder.addCase(deletePost.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
      TostMessage(payload, "error");
    });
    //like post
    builder.addCase(likePost.pending, (state) => {
      // state.loading = true;
      // state.error = null;
      // state.success = false;
    });
    builder.addCase(likePost.fulfilled, (state, { payload }) => {
      state.allPosts = payload;
      state.loading = false;
      state.success = true;
      state.error = null;
      TostMessage("Post Liked!", "success");
    });
    builder.addCase(likePost.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
      TostMessage(payload, "error");
    });
  },
});
export const { newSort, trendingSort } = feedSlice.actions;
export const feedReducer = feedSlice.reducer;

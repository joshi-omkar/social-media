import { createSlice } from "@reduxjs/toolkit";
import { addPost, deletePost, editPost, likePost } from "./newPostAction";
import { TostMessage } from "../../components/TostMessage/TostMessage";


const initialState = {
  loading: false,
  postData: null,
  error: null,
  success: false,
  reloadAllPosts: false,
};

const newPostSclice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //add post
    builder.addCase(addPost.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(addPost.fulfilled, (state, { payload }) => {
      state.postData = payload;
      state.loading = false;
      state.success = true;
      state.error = null;
      state.reloadAllPosts = !state.reloadAllPosts;
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
      state.postData = payload;
      state.loading = false;
      state.success = true;
      state.error = null;
      state.reloadAllPosts = !state.reloadAllPosts;
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
      state.postData = payload;
      state.loading = false;
      state.success = true;
      state.error = null;
      state.reloadAllPosts = !state.reloadAllPosts;
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
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(likePost.fulfilled, (state, { payload }) => {
      state.postData = payload;
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

export default newPostSclice.reducer;

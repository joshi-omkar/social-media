import { createSlice } from "@reduxjs/toolkit";
import { addPost, editPost } from "./newPostAction";
import { TostMessage } from "../../components/TostMessage/TostMessage";

const initialState = {
  loading :false,
  postData: null,
  error: null,
  success: false,
  reloadAllPosts: false
}

const newPostSclice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
      //add post
      builder.addCase(addPost.pending, (state)=> {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      builder.addCase(addPost.fulfilled, (state, {payload}) => {
        state.postData = payload;
        state.loading = false;
        state.success = true;
        state.error = null;
        state.reloadAllPosts = !state.reloadAllPosts
        TostMessage("Post created", "success");
      })
      builder.addCase(addPost.rejected, (state, {payload}) => {
        state.loading = false;
        state.success = false;  
        state.error = payload;
        TostMessage(payload, "error");
      })
      //edit post
      builder.addCase(editPost.pending, (state)=> {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      builder.addCase(editPost.fulfilled, (state, {payload}) => {
        state.postData = payload;
        state.loading = false;
        state.success = true;
        state.error = null;
        state.reloadAllPosts = !state.reloadAllPosts
        TostMessage("Post edited!", "success");
      })
      builder.addCase(editPost.rejected, (state, {payload}) => {
        state.loading = false;
        state.success = false;  
        state.error = payload;
        TostMessage(payload, "error");
        console.log(payload)
      })
    },
  });

export default newPostSclice.reducer;

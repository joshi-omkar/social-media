import { createSlice } from "@reduxjs/toolkit";
import { addPost } from "./newPostAction";

const initialState = {
  loading :false,
  userInfo: JSON.parse(localStorage.getItem('user')),
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
      builder.addCase(addPost.pending, (state)=> {
        state.loading = true
      })
      builder.addCase(addPost.fulfilled, (state, {payload}) => {
        state.postData = payload;
        state.loading = false;
        state.success = true;
        state.reloadAllPosts = !state.reloadAllPosts
      })
      builder.addCase(addPost.rejected, (state, {payload}) => {
        state.error = payload;
        state.loading = false;
        state.success = false
      })
    },
  });

export default newPostSclice.reducer;

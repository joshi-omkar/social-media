import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import newPostReducer from "./features/newPostSlice/newPostSlice";
import { feedReducer } from "./features/Feed/FeedSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    newPost: newPostReducer,
    feed: feedReducer,
  },
});
